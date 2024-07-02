import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeDocumentalTypesComponent } from './see-documental-types.component';

describe('SeeDocumentalTypesComponent', () => {
  let component: SeeDocumentalTypesComponent;
  let fixture: ComponentFixture<SeeDocumentalTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeDocumentalTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeDocumentalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
