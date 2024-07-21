import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeTaskDocumentComponent } from './see-task-document.component';

describe('SeeTaskDocumentComponent', () => {
  let component: SeeTaskDocumentComponent;
  let fixture: ComponentFixture<SeeTaskDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeTaskDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeTaskDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
