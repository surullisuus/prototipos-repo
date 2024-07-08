import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigureGeneralAlertsComponent } from './configure-general-alerts.component';

describe('ConfigureGeneralAlertsComponent', () => {
  let component: ConfigureGeneralAlertsComponent;
  let fixture: ComponentFixture<ConfigureGeneralAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigureGeneralAlertsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigureGeneralAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
