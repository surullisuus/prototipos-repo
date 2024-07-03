import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateNotificationTypeComponent } from './create-notification-type.component';

describe('CreateNotificationTypeComponent', () => {
  let component: CreateNotificationTypeComponent;
  let fixture: ComponentFixture<CreateNotificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNotificationTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNotificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
