import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedasummaryComponent } from './ayurvedasummary.component';

describe('AyurvedasummaryComponent', () => {
  let component: AyurvedasummaryComponent;
  let fixture: ComponentFixture<AyurvedasummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurvedasummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedasummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
