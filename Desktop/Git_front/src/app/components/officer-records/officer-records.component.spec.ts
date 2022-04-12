import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerRecordsComponent } from './officer-records.component';

describe('OfficerRecordsComponent', () => {
  let component: OfficerRecordsComponent;
  let fixture: ComponentFixture<OfficerRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
