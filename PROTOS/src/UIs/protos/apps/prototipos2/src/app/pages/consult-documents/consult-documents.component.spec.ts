import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultDocumentsComponent } from './consult-documents.component';

describe('ConsultDocumentsComponent', () => {
  let component: ConsultDocumentsComponent;
  let fixture: ComponentFixture<ConsultDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultDocumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
