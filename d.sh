#! /bin/bash

# loop 1000 times and copy apps/demo/src/app/app.component.spec.ts
for i in {1..100}
do
  cp "apps/demo/src/app/app.component.spec.ts" "apps/demo/src/app/app-$i.component.spec.ts"
  cp "apps/demo/src/app/btn/btn.component.spec.ts" "apps/demo/src/app/btn/btn-$i.component.spec.ts"
done
