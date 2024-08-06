import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadedInfoTableComponent } from './uploaded-info-table.component';

describe('UploadedInfoTableComponent', () => {
  let component: UploadedInfoTableComponent;
  let fixture: ComponentFixture<UploadedInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadedInfoTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadedInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
