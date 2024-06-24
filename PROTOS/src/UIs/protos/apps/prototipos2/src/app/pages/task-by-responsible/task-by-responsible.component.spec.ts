import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskByResponsibleComponent } from './task-by-responsible.component';

describe('TaskByResponsibleComponent', () => {
  let component: TaskByResponsibleComponent;
  let fixture: ComponentFixture<TaskByResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskByResponsibleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskByResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
