import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeRequirementsComponent } from './see-requirements.component';

describe('SeeRequirementsComponent', () => {
  let component: SeeRequirementsComponent;
  let fixture: ComponentFixture<SeeRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeRequirementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
