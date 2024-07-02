import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetStageRequirementsComponent } from './set-stage-requirements.component';

describe('SetStageRequirementsComponent', () => {
  let component: SetStageRequirementsComponent;
  let fixture: ComponentFixture<SetStageRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetStageRequirementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SetStageRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
