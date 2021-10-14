import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

   contacts: any[] = []

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();    
  }

  deleteContact() {
    console.log(this.contacts)
  }

}
