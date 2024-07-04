import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailStageProcessComponent } from './detail-stage-process.component';

describe('DetailStageProcessComponent', () => {
  let component: DetailStageProcessComponent;
  let fixture: ComponentFixture<DetailStageProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailStageProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailStageProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
