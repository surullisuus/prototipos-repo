import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEmailTemplateDocumentComponent } from './edit-email-template-document.component';

describe('EditEmailTemplateDocumentComponent', () => {
  let component: EditEmailTemplateDocumentComponent;
  let fixture: ComponentFixture<EditEmailTemplateDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmailTemplateDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEmailTemplateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
