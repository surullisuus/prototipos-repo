import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssingResponsibleTaskComponent } from './assing-responsible-task.component';

describe('AssingResponsibleTaskComponent', () => {
  let component: AssingResponsibleTaskComponent;
  let fixture: ComponentFixture<AssingResponsibleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssingResponsibleTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssingResponsibleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
