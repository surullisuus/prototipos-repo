import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloseTaskAnormalComponent } from './close-task-anormal.component';

describe('CloseTaskAnormalComponent', () => {
  let component: CloseTaskAnormalComponent;
  let fixture: ComponentFixture<CloseTaskAnormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseTaskAnormalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseTaskAnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
