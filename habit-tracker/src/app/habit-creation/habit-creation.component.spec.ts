import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitCreationComponent } from './habit-creation.component';

describe('HabitCreationComponent', () => {
  let component: HabitCreationComponent;
  let fixture: ComponentFixture<HabitCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
