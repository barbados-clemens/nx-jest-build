import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BtnComponent } from './btn/btn.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    BtnComponent,
    CardComponent,
    InputComponent,
  ],
  selector: 'ng-jest-impl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
}
