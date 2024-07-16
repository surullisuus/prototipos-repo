import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadTaskDocumentComponent } from './upload-task-document.component';

describe('UploadTaskDocumentComponent', () => {
  let component: UploadTaskDocumentComponent;
  let fixture: ComponentFixture<UploadTaskDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadTaskDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadTaskDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
