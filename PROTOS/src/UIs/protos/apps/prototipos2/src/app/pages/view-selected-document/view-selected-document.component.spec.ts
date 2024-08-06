import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSelectedDocumentComponent } from './view-selected-document.component';

describe('ViewSelectedDocumentComponent', () => {
  let component: ViewSelectedDocumentComponent;
  let fixture: ComponentFixture<ViewSelectedDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSelectedDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSelectedDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
