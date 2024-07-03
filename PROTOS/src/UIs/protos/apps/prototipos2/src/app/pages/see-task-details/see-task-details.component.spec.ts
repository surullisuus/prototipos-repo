import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeTaskDetailsComponent } from './see-task-details.component';

describe('SeeTaskDetailsComponent', () => {
  let component: SeeTaskDetailsComponent;
  let fixture: ComponentFixture<SeeTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeTaskDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
