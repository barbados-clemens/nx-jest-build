import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOneComponent } from '@ng-jest-impl/ng-lib-one';

@Component({
  selector: 'ng-jest-impl-btn',
  standalone: true,
  imports: [CommonModule, BtnOneComponent],
  template: `<p>btn works! <ng-jest-impl-btn-one></ng-jest-impl-btn-one></p>`,
  styles: [],
})
export class BtnComponent {}
