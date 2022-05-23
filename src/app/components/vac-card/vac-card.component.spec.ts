import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacCardComponent } from './vac-card.component';

describe('VacCardComponent', () => {
  let component: VacCardComponent;
  let fixture: ComponentFixture<VacCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
