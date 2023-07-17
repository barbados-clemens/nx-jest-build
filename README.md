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
