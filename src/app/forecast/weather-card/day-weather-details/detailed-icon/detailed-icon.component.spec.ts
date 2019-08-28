import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedIconComponent } from './detailed-icon.component';

describe('DetailedIconComponent', () => {
  let component: DetailedIconComponent;
  let fixture: ComponentFixture<DetailedIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
