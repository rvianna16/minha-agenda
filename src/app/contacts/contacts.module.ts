import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ContactNewComponent } from './contact-new/contact-new.component';




@NgModule({
  declarations: [
    ContactsComponent,
    ContactFormComponent,
    ContactNewComponent,
    
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule
    
  ]
})
export class ContactsModule { }
