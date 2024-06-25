import { Component } from '@angular/core';

interface ProcessPhase {
  processName: string;
  phase: string;
}

@Component({
  selector: 'app-manage-process-configs',
  templateUrl: './manage-process-configs.component.html',
  styleUrl: './manage-process-configs.component.css',
})
export class ManageProcessConfigsComponent {
  processPhases: ProcessPhase[] = [
    {
      processName: 'ABC',
      phase: 'ABC',
    },
    {
      processName: 'ABC',
      phase: 'ABC',
    },
    {
      processName: 'ABC',
      phase: 'ABC',
    },
  ];
}
