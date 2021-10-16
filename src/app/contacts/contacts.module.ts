import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



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
