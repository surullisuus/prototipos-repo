import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartsProcessComponent } from './parts-process.component';

describe('PartsProcessComponent', () => {
  let component: PartsProcessComponent;
  let fixture: ComponentFixture<PartsProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
