#! /bin/bash

# loop 1000 times and copy apps/demo/src/app/app.component.spec.ts
for i in {1..1000}
do
  cp "apps/demo/src/app/app.component.spec.ts" "apps/demo/src/app/app-$i.component.spec.ts"
done
