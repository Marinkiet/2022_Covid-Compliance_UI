import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingInformationComponent } from './landing-information.component';

describe('LandingInformationComponent', () => {
  let component: LandingInformationComponent;
  let fixture: ComponentFixture<LandingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
