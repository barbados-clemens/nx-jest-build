import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnOneComponent } from './btn-one.component';

describe('BtnOneComponent', () => {
  let component: BtnOneComponent;
  let fixture: ComponentFixture<BtnOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
