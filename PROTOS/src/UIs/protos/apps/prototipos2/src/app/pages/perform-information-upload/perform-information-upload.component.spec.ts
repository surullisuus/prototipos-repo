import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformInformationUploadComponent } from './perform-information-upload.component';

describe('PerformInformationUploadComponent', () => {
  let component: PerformInformationUploadComponent;
  let fixture: ComponentFixture<PerformInformationUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformInformationUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerformInformationUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
