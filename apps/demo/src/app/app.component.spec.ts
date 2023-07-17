import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app.routes';
import { BtnComponent } from './btn/btn.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        NxWelcomeComponent,
        RouterTestingModule.withRoutes(appRoutes),
        BtnComponent,
        CardComponent,
        InputComponent,
      ],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome demo');
  });

  it(`should have as title 'demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo');
  });

  it('should snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toMatchSnapshot();
  });

  it.skip('should inline snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toMatchInlineSnapshot();
  });
});
