import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertsByResponsibleComponent } from './alerts-by-responsible.component';

describe('AlertsByResponsibleComponent', () => {
  let component: AlertsByResponsibleComponent;
  let fixture: ComponentFixture<AlertsByResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsByResponsibleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsByResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
