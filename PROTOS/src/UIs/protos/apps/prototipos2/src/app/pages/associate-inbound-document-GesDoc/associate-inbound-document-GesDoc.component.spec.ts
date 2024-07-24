import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociateInboundDocumentGesDocComponent } from './associate-inbound-document-GesDoc.component';

describe('AssociateInboundDocumentGesDocComponent', () => {
  let component: AssociateInboundDocumentGesDocComponent;
  let fixture: ComponentFixture<AssociateInboundDocumentGesDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateInboundDocumentGesDocComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociateInboundDocumentGesDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
