import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPartComponent } from './detail-part.component';

describe('DetailPartComponent', () => {
  let component: DetailPartComponent;
  let fixture: ComponentFixture<DetailPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
