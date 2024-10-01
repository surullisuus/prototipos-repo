import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEmailTemplateDocumentComponent } from './create-email-template-document.component';

describe('CreateEmailTemplateDocumentComponent', () => {
  let component: CreateEmailTemplateDocumentComponent;
  let fixture: ComponentFixture<CreateEmailTemplateDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmailTemplateDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEmailTemplateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
