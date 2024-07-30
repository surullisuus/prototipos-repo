import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendEmailNotificationComponent } from './send-email-notification.component';

describe('SendEmailNotificationComponent', () => {
  let component: SendEmailNotificationComponent;
  let fixture: ComponentFixture<SendEmailNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendEmailNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SendEmailNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
