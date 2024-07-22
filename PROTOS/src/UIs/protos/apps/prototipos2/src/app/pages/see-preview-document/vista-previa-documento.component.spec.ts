import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaPreviaDocumentoComponent } from './vista-previa-documento.component';

describe('VistaPreviaDocumentoComponent', () => {
  let component: VistaPreviaDocumentoComponent;
  let fixture: ComponentFixture<VistaPreviaDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaPreviaDocumentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaPreviaDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
