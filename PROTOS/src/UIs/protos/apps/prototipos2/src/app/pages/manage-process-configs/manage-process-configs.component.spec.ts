import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageProcessConfigsComponent } from './manage-process-configs.component';

describe('ManageProcessConfigsComponent', () => {
  let component: ManageProcessConfigsComponent;
  let fixture: ComponentFixture<ManageProcessConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageProcessConfigsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageProcessConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
