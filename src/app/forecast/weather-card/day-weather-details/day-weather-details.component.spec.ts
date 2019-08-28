import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWeatherDetailsComponent } from './day-weather-details.component';

describe('DayWeatherDetailsComponent', () => {
  let component: DayWeatherDetailsComponent;
  let fixture: ComponentFixture<DayWeatherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayWeatherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
