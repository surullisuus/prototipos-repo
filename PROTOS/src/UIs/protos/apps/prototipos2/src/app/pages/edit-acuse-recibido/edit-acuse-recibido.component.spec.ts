import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAcuseRecibidoComponent } from './edit-acuse-recibido.component';

describe('EditAcuseRecibidoComponent', () => {
  let component: EditAcuseRecibidoComponent;
  let fixture: ComponentFixture<EditAcuseRecibidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAcuseRecibidoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAcuseRecibidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
