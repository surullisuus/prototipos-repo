import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateEmailAlertTypeComponent } from './template-email-alert-type.component';

describe('TemplateEmailAlertTypeComponent', () => {
  let component: TemplateEmailAlertTypeComponent;
  let fixture: ComponentFixture<TemplateEmailAlertTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateEmailAlertTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateEmailAlertTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
