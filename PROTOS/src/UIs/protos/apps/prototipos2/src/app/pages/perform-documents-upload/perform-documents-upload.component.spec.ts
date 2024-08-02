import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformDocumentsUploadComponent } from './perform-documents-upload.component';

describe('PerformDocumentsUploadComponent', () => {
  let component: PerformDocumentsUploadComponent;
  let fixture: ComponentFixture<PerformDocumentsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformDocumentsUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerformDocumentsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
