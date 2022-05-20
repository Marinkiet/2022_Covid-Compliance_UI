import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerprofileComponent } from './officerprofile.component';

describe('OfficerprofileComponent', () => {
  let component: OfficerprofileComponent;
  let fixture: ComponentFixture<OfficerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
