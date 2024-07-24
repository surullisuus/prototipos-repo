import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociateOutboundDocumentSISFVComponent } from './associate-outbound-document-SISFV.component';

describe('AssociateOutboundDocumentSISFVComponent', () => {
  let component: AssociateOutboundDocumentSISFVComponent;
  let fixture: ComponentFixture<AssociateOutboundDocumentSISFVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateOutboundDocumentSISFVComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociateOutboundDocumentSISFVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
