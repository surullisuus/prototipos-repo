import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadInfoModalComponent } from './upload-info-modal.component';

describe('UploadInfoModalComponent', () => {
  let component: UploadInfoModalComponent;
  let fixture: ComponentFixture<UploadInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadInfoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
