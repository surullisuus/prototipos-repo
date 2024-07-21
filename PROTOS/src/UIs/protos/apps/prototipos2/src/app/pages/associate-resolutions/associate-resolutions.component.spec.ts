import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociateResolutionsComponent } from './associate-resolutions.component';

describe('AssociateResolutionsComponent', () => {
  let component: AssociateResolutionsComponent;
  let fixture: ComponentFixture<AssociateResolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateResolutionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociateResolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
