import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadSelectedDocumentComponent } from './upload-selected-document.component';

describe('UploadSelectedDocumentComponent', () => {
  let component: UploadSelectedDocumentComponent;
  let fixture: ComponentFixture<UploadSelectedDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSelectedDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadSelectedDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
