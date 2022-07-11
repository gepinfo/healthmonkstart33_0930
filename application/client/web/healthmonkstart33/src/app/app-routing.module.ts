import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule), canActivate: [AuthGuard] } , 
{ path : 'bmi', loadChildren: () => import('./bmi/bmi.module').then(m => m.BmiModule), canActivate: [AuthGuard] } , 
{ path : 'active', loadChildren: () => import('./active/active.module').then(m => m.ActiveModule), canActivate: [AuthGuard] } , 
{ path : 'summery', loadChildren: () => import('./summery/summery.module').then(m => m.SummeryModule), canActivate: [AuthGuard] } , 
{ path : 'nutritionfooddetailsscreen', loadChildren: () => import('./nutritionfooddetailsscreen/nutritionfooddetailsscreen.module').then(m => m.NutritionfooddetailsscreenModule), canActivate: [AuthGuard] } , 
{ path : 'nutrationdrinkdetails', loadChildren: () => import('./nutrationdrinkdetails/nutrationdrinkdetails.module').then(m => m.NutrationdrinkdetailsModule), canActivate: [AuthGuard] } , 
{ path : 'nutrationfoodselecteddetails', loadChildren: () => import('./nutrationfoodselecteddetails/nutrationfoodselecteddetails.module').then(m => m.NutrationfoodselecteddetailsModule), canActivate: [AuthGuard] } , 
{ path : 'nutritionfooddetailsscreen1', loadChildren: () => import('./nutritionfooddetailsscreen1/nutritionfooddetailsscreen1.module').then(m => m.Nutritionfooddetailsscreen1Module), canActivate: [AuthGuard] } , 
{ path : 'savemealpopupscreen', loadChildren: () => import('./savemealpopupscreen/savemealpopupscreen.module').then(m => m.SavemealpopupscreenModule), canActivate: [AuthGuard] } , 
{ path : 'exercisescr', loadChildren: () => import('./exercisescr/exercisescr.module').then(m => m.ExercisescrModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
