import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailNotificationTypeComponent } from './detail-notification-type.component';

describe('DetailNotificationTypeComponent', () => {
  let component: DetailNotificationTypeComponent;
  let fixture: ComponentFixture<DetailNotificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailNotificationTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailNotificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
