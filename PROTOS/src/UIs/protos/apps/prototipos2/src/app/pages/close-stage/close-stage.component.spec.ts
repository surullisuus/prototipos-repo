import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloseStageComponent } from './close-stage.component';

describe('CloseStageComponent', () => {
  let component: CloseStageComponent;
  let fixture: ComponentFixture<CloseStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseStageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
