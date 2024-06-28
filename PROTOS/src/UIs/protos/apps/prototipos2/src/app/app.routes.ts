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
import { DocumentObservationsComponent } from './pages/document-observations/document-observations.component';import { ManageProcessDesignComponent } from './pages/manage-process-design/manage-process-design.component';
import { ManageTaskComponent } from './pages/manage-task/manage-task.component';
import { SetStageRequirementsComponent } from './pages/set-stage-requirements/set-stage-requirements.component';

export const appRoutes: Route[] = [


    
  { path: '', component: ProcessRequestComponent },
  { path: 'procesos', component: ProcessRequestComponent },
  { path: 'asignar-solicitud', component: AssignRequestComponent },
  { path: 'gestionar-procesos', component: ManageProcessComponent },
  { path: 'partes-procesos', component: PartsProcessComponent },
  { path: 'crear-parte',component: CreatePartComponent},
  { path: 'editar-parte',component: EditPartComponent},
  { path: 'asignar-documento', component: AssignDocumentComponent},
  { path: 'observacion-documento', component: DocumentObservationsComponent},
  { path: 'gestionar-proceso-diseno', component: ManageProcessDesignComponent },
  { path: 'gestionar-tareas', component: ManageTaskComponent },
  { path: 'detalles-parte',component: DetailPartComponent},
  { path: 'consultar-tareas',component: TaskByResponsibleComponent},
  { path: 'asignar-responsable-tareas',component: AssingResponsibleTaskComponent},
  { path: 'consultar-alertas',component: AlertsByResponsibleComponent},
  { path: 'configurar-requerimientos-etapa',component: SetStageRequirementsComponent},
    


];
