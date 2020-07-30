
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{
  path: '', component: InitComponent},
{
  path: "home",
  loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule) 
},
{
  path: "signin",
  loadChildren: () => import('src/app/components/signin/signin.module').then(m => m.SigninModule) 
},
{
 path: "signup",
 loadChildren: () => import('src/app/components/signup/signup.module').then(m => m.SignupModule) 
},
{
 path: "profesional-list",
 loadChildren: () => import('src/app/components/profesional-list/profesional-list.module').then(m => m.ProfesionalListModule),
 canActivate: [AuthGuard] 
},
{
 path: "patient-list",
 loadChildren: () => import('src/app/components/patient-list/patient-list.module').then(m => m.PatientListModule) 
},
{
 path: "patient-new",
 loadChildren: () => import('src/app/components/patient-new/patient-new.module').then(m => m.PatientNewModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
