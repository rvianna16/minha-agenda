import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [ 
  {
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },  
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
    canActivate: [AuthGuard]
  },
  {path: 'login', component: LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
