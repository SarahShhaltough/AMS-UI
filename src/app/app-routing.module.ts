import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { AddVisitComponent } from './visit/add-visit/add-visit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'new-visit', component: AddVisitComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

