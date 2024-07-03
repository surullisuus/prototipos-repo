import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditNotificationTypeComponent } from './edit-notification-type.component';

describe('EditNotificationTypeComponent', () => {
  let component: EditNotificationTypeComponent;
  let fixture: ComponentFixture<EditNotificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNotificationTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditNotificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
