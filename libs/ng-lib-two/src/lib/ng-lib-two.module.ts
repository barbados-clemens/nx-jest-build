import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ngLibTwoRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ngLibTwoRoutes)],
})
export class NgLibTwoModule {}
