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
import { ProcessStagesComponent } from './pages/process-stages/process-stages.component';
import { CreateStageProcessComponent } from './pages/create-stage-process/create-stage-process.component';
import { EditStageProcessComponent } from './pages/edit-stage-process/edit-stage-process.component';
import { DetailStageProcessComponent } from './pages/detail-stage-process/detail-stage-process.component';
import { EmailTemplateComponent } from './pages/email-template/email-template.component';
import { CreateEmailTemplateComponent } from './pages/create-email-template/create-email-template.component';
import { EditEmailTemplateComponent } from './pages/edit-email-template/edit-email-template.component';
import { DetailEmailTemplateComponent } from './pages/detail-email-template/detail-email-template.component';
import { NotificationTypeComponent } from './pages/notification-type/notification-type.component';
import { CreateNotificationTypeComponent } from './pages/create-notification-type/create-notification-type.component';
import { EditNotificationTypeComponent } from './pages/edit-notification-type/edit-notification-type.component';
import { DetailNotificationTypeComponent } from './pages/detail-notification-type/detail-notification-type.component';
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
  { path: 'etapas-proceso', component: ProcessStagesComponent},
  { path: 'crear-etapa', component: CreateStageProcessComponent},
  { path: 'editar-etapa', component: EditStageProcessComponent},
  { path: 'ver-etapa', component: DetailStageProcessComponent},
  { path: 'plantilla-correo', component: EmailTemplateComponent},
  { path: 'crear-plantilla', component: CreateEmailTemplateComponent},
  { path: 'editar-plantilla', component: EditEmailTemplateComponent},
  { path: 'ver-plantilla', component: DetailEmailTemplateComponent},
  { path: 'tipo-notificacion', component: NotificationTypeComponent},
  { path: 'crear-notificacion', component: CreateNotificationTypeComponent},
  { path: 'editar-notificacion', component: EditNotificationTypeComponent},
  { path: 'ver-notificacion', component: DetailNotificationTypeComponent},

  { path: 'detalles-parte',component: DetailPartComponent},
  { path: 'consultar-tareas',component: TaskByResponsibleComponent},
  { path: 'asignar-responsable-tareas',component: AssingResponsibleTaskComponent},
  { path: 'consultar-alertas',component: AlertsByResponsibleComponent},
    


];
