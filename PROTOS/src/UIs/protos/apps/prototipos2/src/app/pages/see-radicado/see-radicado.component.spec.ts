import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeRadicadoComponent } from './see-radicado.component';

describe('SeeRadicadoComponent', () => {
  let component: SeeRadicadoComponent;
  let fixture: ComponentFixture<SeeRadicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeRadicadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeRadicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
