import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeedComponent } from './adminfeed.component';

describe('AdminfeedComponent', () => {
  let component: AdminfeedComponent;
  let fixture: ComponentFixture<AdminfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
