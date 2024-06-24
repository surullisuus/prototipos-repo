import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentObservationsComponent } from './document-observations.component';

describe('DocumentObservationsComponent', () => {
  let component: DocumentObservationsComponent;
  let fixture: ComponentFixture<DocumentObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentObservationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
