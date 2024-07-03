import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditStageProcessComponent } from './edit-stage-process.component';

describe('EditStageProcessComponent', () => {
  let component: EditStageProcessComponent;
  let fixture: ComponentFixture<EditStageProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStageProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditStageProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
