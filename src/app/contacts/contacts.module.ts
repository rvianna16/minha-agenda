import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactFormComponent,
    
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
