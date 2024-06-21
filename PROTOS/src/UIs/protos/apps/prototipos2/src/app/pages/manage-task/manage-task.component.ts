import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { ActionType } from '../../components/dialog/models/action-type.enum';

enum TaskStateEnum {
  Asignada = 'Asignada',
  EnEjecucion = 'En ejecución',
}

enum TemporalTypeEnum {
  Vencida = 'Vencida',
  ProximaAVencer = 'Próxima a vencer',
  EnTermino = 'En termino',
}

interface PhaseTask {
  taskId: number;
  taskName: string;
  /**
   * esta clasificación se define en la HU pantalla gestionar tareas - punto 3.1 y 3.2 de criterios de aceptación
   */
  state: TaskStateEnum;
  /**
   * esta clasificación se define en la HU pantalla gestionar tareas - punto 3.1 de criterios de aceptación
   */
  temporalStatus: TemporalTypeEnum;
  /**
   * esta clasificación se define en la HU pantalla gestionar tareas - punto 3.3 de criterios de aceptación
   */
  implementationType: 'general' | 'específica';
  expirationDate: Date;
  responsible: string;
  noSolicitud: number;
}

type SuggestedTask = Pick<PhaseTask, 'taskId' | 'taskName' | 'noSolicitud'>;

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrl: './manage-task.component.css',
})
export class ManageTaskComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('openbutton') openbutton!: ElementRef;
  @ViewChild('openButtonCloseTaskAnormal')
  openButtonCloseTaskAnormal!: ElementRef;
  subscription!: Subscription;

  solicitudId = 101;

  /**
   * Esta lista de tareas se debe ordenar por el estado, de tal forma que:
   * las tareas en ejecución se muestren primero, seguidas de las tareas asignadas.
   */
  phaseTasks: PhaseTask[] = [
    {
      taskId: 2,
      taskName: 'Proyectar resolución',
      state: TaskStateEnum.Asignada,
      temporalStatus: TemporalTypeEnum.Vencida,
      implementationType: 'general',
      expirationDate: new Date('2024-06-01'),
      responsible: 'ABC',
      noSolicitud: this.solicitudId,
    },
    {
      taskId: 3,
      taskName: 'Aprobar resolución',
      state: TaskStateEnum.Asignada,
      temporalStatus: TemporalTypeEnum.ProximaAVencer,
      implementationType: 'general',
      expirationDate: new Date('2024-09-01'),
      responsible: 'ABC',
      noSolicitud: this.solicitudId,
    },
    {
      taskId: 4,
      taskName: 'Generar estudio',
      state: TaskStateEnum.Asignada,
      temporalStatus: TemporalTypeEnum.ProximaAVencer,
      implementationType: 'específica',
      expirationDate: new Date('2023-03-01'),
      responsible: 'ABC',
      noSolicitud: this.solicitudId,
    },
    {
      taskId: 5,
      taskName: 'prueba ordenamiento',
      state: TaskStateEnum.Asignada,
      temporalStatus: TemporalTypeEnum.EnTermino,
      implementationType: 'específica',
      expirationDate: new Date(),
      responsible: 'ABC',
      noSolicitud: this.solicitudId,
    },
    {
      taskId: 6,
      taskName: 'Generar ordenamiento específico',
      state: TaskStateEnum.Asignada,
      temporalStatus: TemporalTypeEnum.Vencida,
      implementationType: 'específica',
      expirationDate: new Date('2024-09-01'),
      responsible: 'ABC',
      noSolicitud: this.solicitudId,
    },
    {
      taskId: 1,
      taskName: 'Firmar resolución',
      state: TaskStateEnum.EnEjecucion,
      temporalStatus: TemporalTypeEnum.EnTermino,
      implementationType: 'general',
      expirationDate: new Date(),
      responsible: 'ABC',
      noSolicitud: this.solicitudId,
    },
  ];

  suggestedTasks: SuggestedTask[] = [
    {
      taskId: 1,
      taskName: 'Firmar resolución',
      noSolicitud: this.solicitudId,
    },
    {
      taskId: 2,
      taskName: 'Elaborar oficio',
      noSolicitud: this.solicitudId,
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    for (const task of this.phaseTasks) {
      this.setTemporalStatusByTaskId(task.taskId);
    }
    this.mixTasksOrdered();
  }

  setTemporalStatusByTaskId(taskId: number): void {
    const index = this.findTaskIndexOnArray(taskId);
    const task = this.phaseTasks[index];
    task.temporalStatus = this.getTemporalStatusByTask(taskId);

    this.phaseTasks[index] = task;
  }

  getTemporalStatusByTask(taskId: number | string): TemporalTypeEnum {
    const currentTask = this.findTaskById(Number(taskId));

    if (!currentTask) return TemporalTypeEnum.EnTermino;

    const currentDate: Date = new Date();

    if (
      currentDate.toLocaleDateString() ===
      currentTask.expirationDate.toLocaleDateString()
    ) {
      return TemporalTypeEnum.EnTermino;
    } else if (currentDate.getTime() > currentTask.expirationDate.getTime()) {
      return TemporalTypeEnum.Vencida;
    }

    return TemporalTypeEnum.ProximaAVencer;
  }

  findTaskById(taskId: number): PhaseTask | undefined {
    return this.phaseTasks.find((task) => task.taskId === taskId);
  }

  findTaskIndexOnArray(taskId: number): number {
    return this.phaseTasks.findIndex((task) => task.taskId === taskId);
  }

  sortPhaseTasksByTemporalStatus(taskArr: PhaseTask[]): PhaseTask[] {
    taskArr.sort((a, b) => {
      const stateOrder = (state: TemporalTypeEnum): number => {
        switch (state) {
          case TemporalTypeEnum.EnTermino:
            return 1;
          case TemporalTypeEnum.ProximaAVencer:
            return 2;
          case TemporalTypeEnum.Vencida:
            return 3;
          default:
            return 4;
        }
      };

      const stateComparison =
        stateOrder(a.temporalStatus) - stateOrder(b.temporalStatus);

      return stateComparison;
    });

    return taskArr;
  }

  sortPhaseTasksByState(taskArr: PhaseTask[]): PhaseTask[] {
    taskArr.sort((a, b) => {
      const stateOrder = (state: TaskStateEnum): number => {
        switch (state) {
          case TaskStateEnum.EnEjecucion:
            return 1;
          case TaskStateEnum.Asignada:
            return 2;
          default:
            return 3;
        }
      };

      const stateComparison = stateOrder(a.state) - stateOrder(b.state);

      return stateComparison;
    });

    return taskArr;
  }

  sortPhaseTasksByImplementationType(taskArr: PhaseTask[]): PhaseTask[] {
    taskArr.sort((a, b) => {
      const implementationOrder = (implementation: string): number => {
        switch (implementation) {
          case 'general':
            return 1;
          case 'específica':
            return 2;
          default:
            return 3;
        }
      };

      const implementationComparison =
        implementationOrder(a.implementationType) -
        implementationOrder(b.implementationType);

      return implementationComparison;
    });

    return taskArr;
  }

  mixTasksOrdered(): void {
    const sortedTasks: PhaseTask[] = [];
    const taskOnExecution = this.phaseTasks.filter(
      (task) => task.state === TaskStateEnum.EnEjecucion
    );
    const taskAssigned = this.phaseTasks.filter(
      (task) => task.state === TaskStateEnum.Asignada
    );

    sortedTasks.push(...this.sortPhaseTasksByTemporalStatus(taskOnExecution));
    sortedTasks.push(...this.sortPhaseTasksByTemporalStatus(taskAssigned));
    this.phaseTasks = this.sortPhaseTasksByImplementationType(sortedTasks);
  }

  changeTaskState(taskId: number, newState: TaskStateEnum): void {
    const index = this.findTaskIndexOnArray(taskId);
    const task = this.phaseTasks[index];
    task.state = newState;

    this.phaseTasks[index] = task;
  }

  // MODALES

  onSeeCloseTaskAnormalModal() {
    if (this.openButtonCloseTaskAnormal) {
      this.openButtonCloseTaskAnormal.nativeElement.click();
    }
  }

  onInitializeTasktModal(task: PhaseTask, $event: Event) {
    $event.preventDefault();
    console.log('taks', task);

    const dialogData = new DialogData();
    dialogData.title = 'Asignar Solicitud';
    dialogData.body = `¿Está seguro de asignar la tarea ${task.taskName}?`;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          this.changeTaskState(task.taskId, TaskStateEnum.EnEjecucion);
          const body = `La tarea  ha cambiado a estado "En ejecución"`;
          dialogAction.eventClose.emit();
          this.showSuccessTaskInitializationAlertState(body);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onCloseTaskAnormalModal(task: PhaseTask, $event: Event) {
    $event.preventDefault();

    const dialogData = new DialogData();
    //dialogData.title = 'Asignar Solicitud';
    dialogData.body = `¿Está seguro de cerrar la tarea "${task.taskName}" de forma anormal? Recuerde que la acción es irreversible.`;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onSeeCloseTaskAnormalModal();
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showSuccessTaskInitializationAlertState(body: string) {
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = DialogType.success;
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        dialogAction.eventClose.emit();
        location.reload();
      });
  }
}
