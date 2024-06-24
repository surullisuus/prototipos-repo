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
import { ManageTaskComponent } from './pages/manage-task/manage-task.component';
import { CloseTaskAnormalComponent } from './pages/close-task-anormal/close-task-anormal.component';
import { ManageProcessDesignComponent } from './pages/manage-process-design/manage-process-design.component';
import { GenerateExitDocumentComponent } from './pages/generate-exit-document/generate-exit-document.component';
import { PreliminarViewComponent } from './pages/preliminar-view/preliminar-view.component';
import { AssociateEntryDocComponent } from './pages/associate-entry-doc/associate-entry-doc.component';

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
    DialogComponent,
    CloseStageComponent,
    ManageProcessComponent,
    PerformancesComponent,
    PartsProcessComponent,
    ModalComponent,
    SeeRequirementsComponent,
    CreatePartComponent,
    ManageTaskComponent,
    CloseTaskAnormalComponent,
    ManageProcessDesignComponent,
    GenerateExitDocumentComponent,
    PreliminarViewComponent,
    AssociateEntryDocComponent,
    EditPartComponent,
  ],
  imports: [BrowserModule, UisModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
