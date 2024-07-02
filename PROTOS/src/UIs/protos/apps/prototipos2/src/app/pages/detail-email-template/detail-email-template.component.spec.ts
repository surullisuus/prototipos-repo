import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailEmailTemplateComponent } from './detail-email-template.component';

describe('DetailEmailTemplateComponent', () => {
  let component: DetailEmailTemplateComponent;
  let fixture: ComponentFixture<DetailEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEmailTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
