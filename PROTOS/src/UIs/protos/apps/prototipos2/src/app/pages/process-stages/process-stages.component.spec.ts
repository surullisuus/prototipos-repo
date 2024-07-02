import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessStagesComponent } from './process-stages.component';

describe('ProcessStagesComponent', () => {
  let component: ProcessStagesComponent;
  let fixture: ComponentFixture<ProcessStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessStagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
