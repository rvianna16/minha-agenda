import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts.component';

const contactsRoutes: Routes = [
  { path: 'contacts', component: ContactsComponent, children: [
    {path: 'new', component: ContactFormComponent},
    {path: ':id', component: ContactDetailComponent},
    {path: ':id/edit', component: ContactFormComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(contactsRoutes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
