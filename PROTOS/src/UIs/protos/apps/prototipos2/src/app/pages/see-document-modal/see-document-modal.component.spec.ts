import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeDocumentModalComponent } from './see-document-modal.component';

describe('SeeDocumentModalComponent', () => {
  let component: SeeDocumentModalComponent;
  let fixture: ComponentFixture<SeeDocumentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeDocumentModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeDocumentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
