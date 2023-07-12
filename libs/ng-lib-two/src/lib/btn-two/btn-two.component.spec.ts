import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnTwoComponent } from './btn-two.component';

describe('BtnTwoComponent', () => {
  let component: BtnTwoComponent;
  let fixture: ComponentFixture<BtnTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnTwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
