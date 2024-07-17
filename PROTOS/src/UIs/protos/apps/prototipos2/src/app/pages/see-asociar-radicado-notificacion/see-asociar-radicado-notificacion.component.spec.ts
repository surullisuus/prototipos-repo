import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeAsociarRadicadoNotificacionComponent } from './see-asociar-radicado-notificacion.component';

describe('SeeAsociarRadicadoNotificacionComponent', () => {
  let component: SeeAsociarRadicadoNotificacionComponent;
  let fixture: ComponentFixture<SeeAsociarRadicadoNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeAsociarRadicadoNotificacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeAsociarRadicadoNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
