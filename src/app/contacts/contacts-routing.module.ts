import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts.component';

const contactsRoutes: Routes = [
  { path: 'contacts', component: ContactsComponent},
  {path: 'contacts/new', component: ContactsComponent},
  {path: 'contacts/:id/edit', component: ContactFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(contactsRoutes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
