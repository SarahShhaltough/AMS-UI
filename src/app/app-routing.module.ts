import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientComponent } from './patient/patient.component';
import { AddVisitComponent } from './visit/add-visit/add-visit.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'visits/:id', component: VisitComponent },
  { path: 'new-visit/:id', component: AddVisitComponent },
  { path: 'new-patient', component: AddPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

