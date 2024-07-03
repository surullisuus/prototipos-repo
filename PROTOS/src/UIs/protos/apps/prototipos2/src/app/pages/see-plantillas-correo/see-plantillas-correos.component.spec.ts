import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeePlantillasCorreosComponent } from './see-plantillas-correos.component';

describe('SeePlantillasCorreosComponent', () => {
  let component: SeePlantillasCorreosComponent;
  let fixture: ComponentFixture<SeePlantillasCorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeePlantillasCorreosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeePlantillasCorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
