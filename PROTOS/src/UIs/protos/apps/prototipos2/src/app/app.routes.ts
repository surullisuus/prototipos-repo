import { Route } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProcessRequestComponent } from './pages/process-request/process-request.component';
import { AssignRequestComponent } from './pages/assign-request/assign-request.component';
import { ManageProcessComponent } from './pages/manage-process/manage-process.component';
import { PartsProcessComponent } from './pages/parts-process/parts-process.component';
import { CreatePartComponent } from './pages/create-part/create-part.component';
import { EditPartComponent } from './pages/edit-part/edit-part.component';
import { DetailPartComponent } from './pages/detail-part/detail-part.component';
import { TaskByResponsibleComponent } from './pages/task-by-responsible/task-by-responsible.component';
import { AssingResponsibleTaskComponent } from './pages/assing-responsible-task/assing-responsible-task.component';
import { AlertsByResponsibleComponent } from './pages/alerts-by-responsible/alerts-by-responsible.component';
import { AssignDocumentComponent } from './pages/assign-document/assign-document.component';
import { DocumentObservationsComponent } from './pages/document-observations/document-observations.component';
import { ManageProcessDesignComponent } from './pages/manage-process-design/manage-process-design.component';
import { ManageTaskComponent } from './pages/manage-task/manage-task.component';
import { ManageProcessConfigsComponent } from './pages/manage-process-configs/manage-process-configs.component';
import { SeeDocumentalTypesComponent } from './pages/see-documental-types/see-documental-types.component';
import { SeeTaskDetailsComponent } from './pages/see-task-details/see-task-details.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { CreateTaskConfigComponent } from './pages/create-task-configs/create-task-config.component';

export const appRoutes: Route[] = [
  { path: '', component: ProcessRequestComponent },
  { path: 'procesos', component: ProcessRequestComponent },
  { path: 'asignar-solicitud', component: AssignRequestComponent },
  { path: 'gestionar-procesos', component: ManageProcessComponent },
  { path: 'partes-procesos', component: PartsProcessComponent },
  { path: 'crear-parte', component: CreatePartComponent },
  { path: 'editar-parte', component: EditPartComponent },
  { path: 'asignar-documento', component: AssignDocumentComponent },
  { path: 'observacion-documento', component: DocumentObservationsComponent },
  { path: 'gestionar-proceso-diseno', component: ManageProcessDesignComponent },
  { path: 'gestionar-tareas', component: ManageTaskComponent },
  {
    path: 'configuracionEtapasProceso',
    component: ManageProcessConfigsComponent,
  },
  { path: 'detalles-parte', component: DetailPartComponent },
  { path: 'consultar-tareas', component: TaskByResponsibleComponent },
  {
    path: 'asignar-responsable-tareas',
    component: AssingResponsibleTaskComponent,
  },
  { path: 'consultar-alertas', component: AlertsByResponsibleComponent },
  { path: 'tipos-documentales', component: SeeDocumentalTypesComponent },
  { path: 'task-details/:id', component: SeeTaskDetailsComponent },
  { path: 'create-task', component: CreateTaskConfigComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
];
