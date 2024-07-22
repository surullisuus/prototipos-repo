import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { ProcessRequestComponent } from './pages/process-request/process-request.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';
import { AssignRequestComponent } from './pages/assign-request/assign-request.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CloseStageComponent } from './pages/close-stage/close-stage.component';
import { ManageProcessComponent } from './pages/manage-process/manage-process.component';
import { PerformancesComponent } from './pages/performances/performances.component';
import { ModalComponent } from './components/modal/modal.component';
import { UisModule } from '@protos/lib';
import { PartsProcessComponent } from './pages/parts-process/parts-process.component';
import { SeeRequirementsComponent } from './pages/see-requirements/see-requirements.component';
import { CreatePartComponent } from './pages/create-part/create-part.component';
import { EditPartComponent } from './pages/edit-part/edit-part.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailPartComponent } from './pages/detail-part/detail-part.component';
import { TaskByResponsibleComponent } from './pages/task-by-responsible/task-by-responsible.component';
import { AssingResponsibleTaskComponent } from './pages/assing-responsible-task/assing-responsible-task.component';
import { AlertsByResponsibleComponent } from './pages/alerts-by-responsible/alerts-by-responsible.component';
import { AssignDocumentComponent } from './pages/assign-document/assign-document.component';
import { DocumentObservationsComponent } from './pages/document-observations/document-observations.component';
import { ManageTaskComponent } from './pages/manage-task/manage-task.component';
import { CloseTaskAnormalComponent } from './pages/close-task-anormal/close-task-anormal.component';
import { SeeRadicadoComponent } from './pages/see-radicado/see-radicado.component';
import { ManageProcessConfigsComponent } from './pages/manage-process-configs/manage-process-configs.component';
import { ManageProcessDesignComponent } from './pages/manage-process-design/manage-process-design.component';
import { GenerateExitDocumentComponent } from './pages/generate-exit-document/generate-exit-document.component';
import { PreliminarViewComponent } from './pages/preliminar-view/preliminar-view.component';
import { AssociateEntryDocComponent } from './pages/associate-entry-doc/associate-entry-doc.component';
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
import { VerRadicadoViewComponent } from './pages/verRadicadoView/verRadicadoView.component';
import { SeeDocumentalTypesComponent } from './pages/see-documental-types/see-documental-types.component';
import { SeeTaskDetailsComponent } from './pages/see-task-details/see-task-details.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { CreateTaskConfigComponent } from './pages/create-task-configs/create-task-config.component';
import { SetStageRequirementsComponent } from './pages/set-stage-requirements/set-stage-requirements.component';
import { CreateRequirementComponent } from './pages/create-requirement/create-requirement.component';
import { EditRequirementComponent } from './pages/edit-requirement/edit-requirement.component';
import { CreateTaskComponent } from './pages/createTask/createTask.component';
import { ConfigureFlowStagesComponent } from './pages/configure-flow-stages/configure-flow-stages.component';
import { ManagePlantillasCorreosComponent } from './pages/manage-plantillas-correo/manage-plantillas-correos.component';
import { SeeEmailTemplateComponent } from './pages/see-email-template/see-email-template.component';
import { ConfigureFlowTasksComponent } from './pages/configure-flow-tasks/configure-flow-tasks.component';
import { ConfigureGeneralAlertsComponent } from './pages/configure-general-alerts/configure-general-alerts.component';
import { UploadTaskDocumentComponent } from './pages/upload-task-document/upload-task-document.component';
import { DocumentSigningComponent } from './pages/document-signing/document-signing.component';
import { FileDocumentComponent } from './pages/file-document/file-document.component';
import { SeeReadPermissionsComponent } from './pages/see-read-permissions/see-read-permissions.component';
import { AddRolesModalComponent } from './pages/add-roles-modal/add-roles-modal.component';
import { TestModalComponent } from './pages/test-modal/test-modal.component';
import { ModalUsuarioExternoComponent } from './pages/modal-usuario-externo/modal-usuario-externo.component';
import { PermisosLecturaInternoModalComponent } from './pages/permisos-lectura-interno-modal/permisos-lectura-interno-modal.component';
import { ModalUsuarioInternoComponent } from './pages/modal-usuario-interno/modal-usuario-interno.component';
import { ManageSeguimientoNotificacionesComponent } from './pages/manage-seguimiento-notificaciones/manage-seguimiento-notificaciones.component';
import { EditAcuseRecibidoComponent } from './pages/edit-acuse-recibido/edit-acuse-recibido.component';
import { SeeConsultarRadicadoComponent } from './pages/see-consultar-radicado/see-consultar-radicado.component';
import { SeeAsociarRadicadoNotificacionComponent } from './pages/see-asociar-radicado-notificacion/see-asociar-radicado-notificacion.component';
import { ConsultFileComponent } from './pages/consult-file/consult-file.component';
import { AssociateDocumentsComponent } from './pages/associate-documents/associate-documents.component';
import { ConsultDocumentsComponent } from './pages/consult-documents/consult-documents.component';
import { SeeTaskDocumentComponent } from './pages/see-task-document/see-task-document.component';
import { AssociateOutboundDocumentSISFVComponent } from './pages/associate-outbound-document-SISFV/associate-outbound-document-SISFV.component';
import { AssociateInboundDocumentGesDocComponent } from './pages/associate-inbound-document-GesDoc/associate-inbound-document-GesDoc.component';
import { AssociateResolutionsComponent } from './pages/associate-resolutions/associate-resolutions.component';
import { GenerarDocumentoComponent } from './pages/create-document/generar-documento.component';
import { VistaPreviaDocumentoComponent } from './pages/see-preview-document/vista-previa-documento.component';
import { EditarDocumentoComponent } from './pages/edit-document/editar-documento.component';
import { DeleteDocumentComponent } from './pages/delete-document/delete-document.component';
import { SeeDocumentModalComponent } from './pages/see-document-modal/see-document-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    DropdownListComponent,
    ProcessRequestComponent,
    PaginatorComponent,
    LoadingModalComponent,
    AssignRequestComponent,
    AssignDocumentComponent,
    DialogComponent,
    DocumentObservationsComponent,
    CloseStageComponent,
    ManageProcessComponent,
    PerformancesComponent,
    PartsProcessComponent,
    ModalComponent,
    SeeRequirementsComponent,
    CreatePartComponent,
    ManageTaskComponent,
    CloseTaskAnormalComponent,
    SeeRadicadoComponent,
    ManageProcessConfigsComponent,
    ManageProcessDesignComponent,
    GenerateExitDocumentComponent,
    PreliminarViewComponent,
    AssociateEntryDocComponent,
    EditPartComponent,
    ProcessStagesComponent,
    CreateStageProcessComponent,
    EditStageProcessComponent,
    DetailStageProcessComponent,
    EmailTemplateComponent,
    CreateEmailTemplateComponent,
    EditEmailTemplateComponent,
    DetailEmailTemplateComponent,
    NotificationTypeComponent,
    CreateNotificationTypeComponent,
    EditNotificationTypeComponent,
    DetailNotificationTypeComponent,
    DetailPartComponent,
    TaskByResponsibleComponent,
    AssingResponsibleTaskComponent,
    AlertsByResponsibleComponent,
    VerRadicadoViewComponent,
    SeeDocumentalTypesComponent,
    SeeTaskDetailsComponent,
    EditTaskComponent,
    CreateTaskConfigComponent,
    SetStageRequirementsComponent,
    CreateRequirementComponent,
    EditRequirementComponent,
    CreateTaskComponent,
    ConfigureFlowStagesComponent,
    ManagePlantillasCorreosComponent,
    CreateEmailTemplateComponent,
    EditEmailTemplateComponent,
    SeeEmailTemplateComponent,
    ConfigureFlowTasksComponent,
    ConfigureGeneralAlertsComponent,
    UploadTaskDocumentComponent,
    DocumentSigningComponent,
    FileDocumentComponent,
    SeeReadPermissionsComponent,
    AddRolesModalComponent,
    ModalUsuarioInternoComponent,
    ModalUsuarioExternoComponent,
    PermisosLecturaInternoModalComponent,
    ManageSeguimientoNotificacionesComponent,
    EditAcuseRecibidoComponent,
    SeeConsultarRadicadoComponent,
    SeeAsociarRadicadoNotificacionComponent,
    ConsultFileComponent,
    AssociateDocumentsComponent,
    TestModalComponent,
    ConsultDocumentsComponent,
    SeeTaskDocumentComponent,
    AssociateOutboundDocumentSISFVComponent,
    AssociateInboundDocumentGesDocComponent,
    AssociateResolutionsComponent,
    GenerarDocumentoComponent,
    VistaPreviaDocumentoComponent,
    EditarDocumentoComponent,
    DeleteDocumentComponent,
    SeeDocumentModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UisModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
