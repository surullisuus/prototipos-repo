import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeEmailTemplateComponent } from './see-email-template.component';

describe('SeeEmailTemplateComponent', () => {
  let component: SeeEmailTemplateComponent;
  let fixture: ComponentFixture<SeeEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeEmailTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
