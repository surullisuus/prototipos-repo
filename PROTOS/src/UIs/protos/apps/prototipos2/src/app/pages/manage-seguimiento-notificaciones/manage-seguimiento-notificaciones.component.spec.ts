import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageSeguimientoNotificacionesComponent } from './manage-seguimiento-notificaciones.component';

describe('ManageSeguimientoNotificacionesComponent', () => {
  let component: ManageSeguimientoNotificacionesComponent;
  let fixture: ComponentFixture<ManageSeguimientoNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSeguimientoNotificacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageSeguimientoNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
