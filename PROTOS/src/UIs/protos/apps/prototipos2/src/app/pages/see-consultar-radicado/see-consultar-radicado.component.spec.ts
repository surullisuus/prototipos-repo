import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeConsultarRadicadoComponent } from './see-consultar-radicado.component';

describe('SeeConsultarRadicadoComponent', () => {
  let component: SeeConsultarRadicadoComponent;
  let fixture: ComponentFixture<SeeConsultarRadicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeConsultarRadicadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeConsultarRadicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
