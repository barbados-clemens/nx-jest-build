```shell
# not using the jest cache
hyperfine -p "npx jest --clear-cache" "npx nx test demo --skip-nx-cache" "npx nx xtest demo --skip-nx-cache"yperfine
```

> Note a local release of Nx off the [`feat/jest-build`](https://github.com/barbados-clemens/nx/tree/feat/jest-build) branch is needed.

# Benchmark results on M1 Max macOS 13.4.1 (c)

```shell

Benchmark 1: npx nx test demo --skip-nx-cache
  Time (mean ± σ):     22.881 s ±  0.277 s    [User: 175.741 s, System: 8.874 s]
  Range (min … max):   22.523 s … 23.272 s    10 runs

Benchmark 2: npx nx xtest demo --skip-nx-cache
  Time (mean ± σ):     36.324 s ±  0.758 s    [User: 294.802 s, System: 22.109 s]
  Range (min … max):   35.489 s … 38.067 s    10 runs

Summary
  'npx nx test demo --skip-nx-cache' ran
    1.59 ± 0.04 times faster than 'npx nx xtest demo --skip-nx-cache'

```

Note, this method doesn't allow snapshots to work since the test files are in the dist directory.
there is a custom [snapshotResolver](https://jestjs.io/docs/configuration#snapshotresolver-string) setting that could be used to map the files back and forth between directories.
But unable to get inlineSnapshots to work. the filepath trying to resolve is an invalid path so unsure what has to change there.

```
Test suite failed to run
ENOENT: no such file or directory, open '/Users/caleb/Work/sandbox/ng-jest-impl/dist/test-out/demo/apps/demo/src/app/app-
  100.component.spec.ts'
at saveSnapshotsForFile (../../../node_modules/jest-snapshot/build/InlineSnapshots.js:118:22)

```
> This is caleb from the future adding more info

This is basically the snapshotResolver I wrote.

```js
const { dirname, basename, relative } = require('node:path');
const { workspaceRoot} = require('@nx/devkit');
module.exports = {
  // resolves from test to snapshot path
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    // remove dist/test-out from the path 
    // TODO this should be in the project root not next to the test file.
    const parentDir = dirname(testPath.replace('dist/test-out/', ''));
    const fileName = basename(testPath);
   return parentDir + '/__snapshots__/' + fileName + snapshotExtension
  },

  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    console.log({snapshotFilePath, snapshotExtension})
 
    const fromWSRoot = relative(workspaceRoot, snapshotFilePath);
   const r = fromWSRoot
      .replace('__snapshots__/', '')
      .slice(0, -snapshotExtension.length);
    const v = 
    `${workspaceRoot}/dist/test-out/${r}`;

    console.log({fromWSRoot, r, v});
    return v;
} ,
  // Example test path, used for preflight consistency check of the implementation above
// assuming the compiled output is something like <workspaceRoot>dist/test-out/<projectRoot>/<pathToSpecFile>
  testPathForConsistencyCheck: `${workspaceRoot}/dist/test-out/apps/demo/src/example.spec.mjs`
};
```
The main issue is the snapshots are placed in the directory where the test file comes from instead of the project root. 
using the graph should be able to find the actual project root for a given file. I just didn't go that far. 

The other bit is this only resolves the snapshot files and doesn't do anything for inlineSnapshots as far as I can tell. For inline snapshots I believe the sourceMaps are leveraged to figure out how to add those back to the original files. otherwise the compiled .spec.mjs files will be the one the snapshot info is written to. 
