import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlujoDocumentoComponent } from './flujo-documento.component';

describe('FlujoDocumentoComponent', () => {
  let component: FlujoDocumentoComponent;
  let fixture: ComponentFixture<FlujoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlujoDocumentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlujoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
