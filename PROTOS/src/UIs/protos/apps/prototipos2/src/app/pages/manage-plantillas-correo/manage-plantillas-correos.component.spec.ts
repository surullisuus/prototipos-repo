import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagePlantillasCorreosComponent } from './manage-plantillas-correos.component';

describe('SeePlantillasCorreosComponent', () => {
  let component: ManagePlantillasCorreosComponent;
  let fixture: ComponentFixture<ManagePlantillasCorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePlantillasCorreosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagePlantillasCorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
