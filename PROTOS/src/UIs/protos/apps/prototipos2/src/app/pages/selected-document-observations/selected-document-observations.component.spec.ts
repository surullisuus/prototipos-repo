import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedDocumentObservationsComponent } from './selected-document-observations.component';

describe('SelectedDocumentObservationsComponent', () => {
  let component: SelectedDocumentObservationsComponent;
  let fixture: ComponentFixture<SelectedDocumentObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedDocumentObservationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedDocumentObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
