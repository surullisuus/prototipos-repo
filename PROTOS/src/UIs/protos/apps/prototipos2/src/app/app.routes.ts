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
import { ProcessStagesComponent } from './pages/process-stages/process-stages.component';
import { CreateStageProcessComponent } from './pages/create-stage-process/create-stage-process.component';
import { EditStageProcessComponent } from './pages/edit-stage-process/edit-stage-process.component';
import { DetailStageProcessComponent } from './pages/detail-stage-process/detail-stage-process.component';
import { EmailTemplateComponent } from './pages/email-template/email-template.component';
import { DetailEmailTemplateComponent } from './pages/detail-email-template/detail-email-template.component';
import { NotificationTypeComponent } from './pages/notification-type/notification-type.component';
import { CreateNotificationTypeComponent } from './pages/create-notification-type/create-notification-type.component';
import { EditNotificationTypeComponent } from './pages/edit-notification-type/edit-notification-type.component';
import { DetailNotificationTypeComponent } from './pages/detail-notification-type/detail-notification-type.component';
import { SetStageRequirementsComponent } from './pages/set-stage-requirements/set-stage-requirements.component';
import { CreateTaskComponent } from './pages/createTask/createTask.component';
import { ConfigureFlowStagesComponent } from './pages/configure-flow-stages/configure-flow-stages.component';
import { ConfigureFlowTasksComponent } from './pages/configure-flow-tasks/configure-flow-tasks.component';
import { ManageProcessConfigsComponent } from './pages/manage-process-configs/manage-process-configs.component';
import { SeeDocumentalTypesComponent } from './pages/see-documental-types/see-documental-types.component';
import { SeeTaskDetailsComponent } from './pages/see-task-details/see-task-details.component';
import { CreateTaskConfigComponent } from './pages/create-task-configs/create-task-config.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { SeeReadPermissionsComponent } from './pages/see-read-permissions/see-read-permissions.component';
import { ConfigureGeneralAlertsComponent } from './pages/configure-general-alerts/configure-general-alerts.component';
import { ManagePlantillasCorreosComponent } from './pages/manage-plantillas-correo/manage-plantillas-correos.component';
import { CreateEmailTemplateComponent } from './pages/create-email-template/create-email-template.component';
import { EditEmailTemplateComponent } from './pages/edit-email-template/edit-email-template.component';
import { SeeEmailTemplateComponent } from './pages/see-email-template/see-email-template.component';
import { ManageSeguimientoNotificacionesComponent } from './pages/manage-seguimiento-notificaciones/manage-seguimiento-notificaciones.component';
import { EditAcuseRecibidoComponent } from './pages/edit-acuse-recibido/edit-acuse-recibido.component';
import { SeeConsultarRadicadoComponent } from './pages/see-consultar-radicado/see-consultar-radicado.component';
import { UploadTaskDocumentComponent } from './pages/upload-task-document/upload-task-document.component';
import { SeeAsociarRadicadoNotificacionComponent } from './pages/see-asociar-radicado-notificacion/see-asociar-radicado-notificacion.component';
import { ConsultFileComponent } from './pages/consult-file/consult-file.component';
import { AssociateDocumentsComponent } from './pages/associate-documents/associate-documents.component';
import { TestModalComponent } from './pages/test-modal/test-modal.component';
import { ConsultDocumentsComponent } from './pages/consult-documents/consult-documents.component';
import { GenerarDocumentoComponent } from './pages/create-document/generar-documento.component';
import { VistaPreviaDocumentoComponent } from './pages/see-preview-document/vista-previa-documento.component';
import { EditarDocumentoComponent } from './pages/edit-document/editar-documento.component';
import { AssociateOutboundDocumentSISFVComponent } from './pages/associate-outbound-document-SISFV/associate-outbound-document-SISFV.component';
import { AssociateInboundDocumentGesDocComponent } from './pages/associate-inbound-document-GesDoc/associate-inbound-document-GesDoc.component';
import { AssociateResolutionsComponent } from './pages/associate-resolutions/associate-resolutions.component';
import { ManageTaskDocumentComponent } from './pages/manage-task-document/manage-task-document.component';
import { SendEmailNotificationComponent } from './pages/send-email-notification/send-email-notification.component';
import { TaskCommentsViewComponent } from './pages/task-comments-view/task-comments-view.component';
import { FillAdditionalTaskFieldsComponent } from './pages/fill-additional-task-fields/fill-additional-task-fields.component';
import { PerformDocumentsUploadComponent } from './pages/perform-documents-upload/perform-documents-upload.component';
import { PerformInformationUploadComponent } from './pages/perform-information-upload/perform-information-upload.component';
import { TemplateEmailAlertTypeComponent } from './pages/template-email-alert-type/template-email-alert-type.component';

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
    path: 'configurar-tareas-etapa',
    component: ManageProcessConfigsComponent,
  },
  { path: 'consultar-etapas-proceso', component: ProcessStagesComponent },
  { path: 'crear-etapa', component: CreateStageProcessComponent },
  { path: 'editar-etapa', component: EditStageProcessComponent },
  { path: 'ver-etapa', component: DetailStageProcessComponent },
  { path: 'plantilla-correo', component: EmailTemplateComponent },
  { path: 'crear-plantilla', component: CreateEmailTemplateComponent },
  { path: 'editar-plantilla', component: EditEmailTemplateComponent },
  { path: 'ver-plantilla', component: DetailEmailTemplateComponent },
  { path: 'Consultar-tipo-notificacion', component: NotificationTypeComponent },
  { path: 'crear-notificacion', component: CreateNotificationTypeComponent },
  { path: 'editar-notificacion', component: EditNotificationTypeComponent },
  { path: 'ver-notificacion', component: DetailNotificationTypeComponent },
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
  { path: 'detalles-parte', component: DetailPartComponent },
  { path: 'consultar-tareas', component: TaskByResponsibleComponent },
  {
    path: 'asignar-responsable-tareas',
    component: AssingResponsibleTaskComponent,
  },
  { path: 'consultar-alertas', component: AlertsByResponsibleComponent },
  {
    path: 'configurar-requerimientos-etapa',
    component: SetStageRequirementsComponent,
  },
  { path: 'crear-tarea', component: CreateTaskComponent },
  {
    path: 'consultar-plantillas-correo',
    component: ManagePlantillasCorreosComponent,
  },
  {
    path: 'crear-plantilla-correo',
    component: CreateEmailTemplateComponent,
  },
  {
    path: 'editar-plantilla-correo/:id',
    component: EditEmailTemplateComponent,
  },
  {
    path: 'consultar-plantilla-correo/:id',
    component: SeeEmailTemplateComponent,
  },
  { path: 'configurar-flujo-etapas', component: ConfigureFlowStagesComponent },
  { path: 'configurar-flujo-tareas', component: ConfigureFlowTasksComponent },
  {
    path: 'configurar-alertas-generales',
    component: ConfigureGeneralAlertsComponent,
  },
  {
    path: 'configurar-alertas-generales',
    component: ConfigureGeneralAlertsComponent,
  },

  { path: 'cargar-documento-tarea', component: UploadTaskDocumentComponent },
  { path: 'consultar-permisos-lectura', component: SeeReadPermissionsComponent },
  {
    path: 'seguimiento-notificaciones',
    component: ManageSeguimientoNotificacionesComponent,
  },
  { path: 'editar-acuse-recibido/:id', component: EditAcuseRecibidoComponent },
  {
    path: 'consultar-radicado-notificación/:id',
    component: SeeConsultarRadicadoComponent,
  },
  {
    path: 'asociar-radicado-notificacion/:id',
    component: SeeAsociarRadicadoNotificacionComponent,
  },
  { path: 'consultar-radicado', component: ConsultFileComponent },
  { path: 'asociar-documentos-gesdoc', component: AssociateDocumentsComponent },
  { path: 'probar-modal', component: TestModalComponent },
  { path: 'consultar-documentos', component: ConsultDocumentsComponent },
  { path: 'generar-documento', component: GenerarDocumentoComponent },
  { path: 'vista-previa-documento', component: VistaPreviaDocumentoComponent },
  { path: 'editar-documento/:id', component: EditarDocumentoComponent },

  {
    path: 'asociar-documento-SISFV',
    component: AssociateOutboundDocumentSISFVComponent,
  },
  {
    path: 'asociar-documento-entrada-GesDoc',
    component: AssociateInboundDocumentGesDocComponent,
  },
  { path: 'asociar-resolucion', component: AssociateResolutionsComponent },
  { path: 'gestionar-documento-tarea', component: ManageTaskDocumentComponent },
  { path: 'enviar-notificacion', component: SendEmailNotificationComponent},
  { path: 'configurar-plantilla-tipo-alerta', component: TemplateEmailAlertTypeComponent},

  { path: 'ver-comentarios-tarea', component: TaskCommentsViewComponent},
  { path: 'diligenciar-acampos-tarea', component: FillAdditionalTaskFieldsComponent},
  { path: 'realizar-cargue-documentos', component: PerformDocumentsUploadComponent},
  { path: 'realizar-cargue-informacion', component: PerformInformationUploadComponent},
];