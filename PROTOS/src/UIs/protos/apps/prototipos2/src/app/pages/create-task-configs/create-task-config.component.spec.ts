import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTaskConfigComponent } from './create-task-config.component';

describe('CreateTaskConfigComponent', () => {
  let component: CreateTaskConfigComponent;
  let fixture: ComponentFixture<CreateTaskConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTaskConfigComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
