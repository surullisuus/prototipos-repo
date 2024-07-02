import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateStageProcessComponent } from './create-stage-process.component';

describe('CreateStageProcessComponent', () => {
  let component: CreateStageProcessComponent;
  let fixture: ComponentFixture<CreateStageProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStageProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateStageProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
