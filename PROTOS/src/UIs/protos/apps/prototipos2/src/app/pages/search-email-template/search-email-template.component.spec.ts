import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchEmailTemplateComponent } from './search-email-template.component';

describe('SearchEmailTemplateComponent', () => {
  let component: SearchEmailTemplateComponent;
  let fixture: ComponentFixture<SearchEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEmailTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
