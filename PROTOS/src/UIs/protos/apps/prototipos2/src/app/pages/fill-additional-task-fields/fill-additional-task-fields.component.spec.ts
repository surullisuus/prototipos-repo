import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FillAdditionalTaskFieldsComponent } from './fill-additional-task-fields.component';

describe('FillAdditionalTaskFieldsComponent', () => {
  let component: FillAdditionalTaskFieldsComponent;
  let fixture: ComponentFixture<FillAdditionalTaskFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillAdditionalTaskFieldsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FillAdditionalTaskFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
