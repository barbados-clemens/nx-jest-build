import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ngLibOneRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ngLibOneRoutes)],
})
export class NgLibOneModule {}
