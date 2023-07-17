import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ng-lib-two',
    loadChildren: () =>
      import('@ng-jest-impl/ng-lib-two').then((m) => m.NgLibTwoModule),
  },
];
