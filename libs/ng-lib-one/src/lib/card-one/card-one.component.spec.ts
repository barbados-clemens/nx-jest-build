import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardOneComponent } from './card-one.component';

describe('CardOneComponent', () => {
  let component: CardOneComponent;
  let fixture: ComponentFixture<CardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
