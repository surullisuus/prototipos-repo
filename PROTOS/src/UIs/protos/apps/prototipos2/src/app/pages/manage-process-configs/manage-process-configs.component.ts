import { Component } from '@angular/core';

interface ProcessPhase {
  processName: string;
  phase: string;
  task: string;
  id: number;
}

@Component({
  selector: 'app-manage-process-configs',
  templateUrl: './manage-process-configs.component.html',
  styleUrl: './manage-process-configs.component.css',
})
export class ManageProcessConfigsComponent {
  processPhases: ProcessPhase[] = [
    {
      id: 1,
      processName: 'ABC',
      phase: 'ABC',
      task: 'ABC',
    },
    {
      id: 2,
      processName: 'ABC',
      phase: 'ABC',
      task: 'ABC',
    },
    {
      id: 3,
      processName: 'ABC',
      phase: 'ABC',
      task: 'ABC',
    },
  ];

  selectedProcess: string | null = null;
  selectedPhase: string | null = null;
  selectedTask: string | null = null;

  processOptions() {
    return this.processPhases.map((processPhase) => {
      return { id: processPhase.processName, text: processPhase.processName };
    });
  }

  phaseOptions() {
    return this.processPhases.map((process) => {
      return { id: process.phase, text: process.phase };
    });
  }

  taskOptions() {
    return this.processPhases.map((process) => {
      return { id: process.task, text: process.task };
    });
  }

  setSelectedProcess($event: { id: string; text: string }) {
    this.selectedProcess = $event.text;
  }

  setSelectedPhase($event: { id: string; text: string }) {
    this.selectedPhase = $event.text;
  }

  setSelectedTask($event: { id: string; text: string }) {
    this.selectedTask = $event.text;
  }

  clearFilters() {
    this.selectedProcess = null;
    this.selectedPhase = null;
    this.selectedTask = null;
  }
}
