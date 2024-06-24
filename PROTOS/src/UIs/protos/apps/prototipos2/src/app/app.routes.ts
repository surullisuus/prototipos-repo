import { Route } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProcessRequestComponent } from './pages/process-request/process-request.component';
import { AssignRequestComponent } from './pages/assign-request/assign-request.component';
import { ManageProcessComponent } from './pages/manage-process/manage-process.component';
import { PartsProcessComponent } from './pages/parts-process/parts-process.component';
import { CreatePartComponent } from './pages/create-part/create-part.component';
import { EditPartComponent } from './pages/edit-part/edit-part.component';
import { AssignDocumentComponent } from './pages/assign-document/assign-document.component';
import { DocumentObservationsComponent } from './pages/document-observations/document-observations.component';import { ManageProcessDesignComponent } from './pages/manage-process-design/manage-process-design.component';
import { ManageTaskComponent } from './pages/manage-task/manage-task.component';

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
  { path: 'crear-parte', component: CreatePartComponent },
  { path: 'editar-parte', component: EditPartComponent },
  { path: 'gestionar-proceso-diseno', component: ManageProcessDesignComponent },
  { path: 'gestionar-tareas', component: ManageTaskComponent },
];
