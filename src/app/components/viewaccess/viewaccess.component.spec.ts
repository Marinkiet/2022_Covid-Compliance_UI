import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccessComponent } from './viewaccess.component';

describe('ViewaccessComponent', () => {
  let component: ViewaccessComponent;
  let fixture: ComponentFixture<ViewaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
