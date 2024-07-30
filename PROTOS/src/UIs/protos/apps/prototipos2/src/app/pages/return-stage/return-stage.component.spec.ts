import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReturnStageComponent } from './return-stage.component';

describe('ReturnStageComponent', () => {
  let component: ReturnStageComponent;
  let fixture: ComponentFixture<ReturnStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnStageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
