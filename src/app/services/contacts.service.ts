import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: any[] = [
    { id: 1, name: 'Rodrigo Vianna', number: 21999455975 },
    { id: 2, name: 'Contato 02', number: 21995690709 },
    { id: 3, name: 'Contato 03', number: 21999455975 },
    { id: 4, name: 'Contato 04', number: 21999455975 },
  ];

  constructor() {}

  getContacts() {
    return this.contacts;
  }

  getContact(id: number) {
    let contacts = this.getContacts();

    for (let contact of contacts) {
      if (contact.id == id) {
        return contact;
      }
    }
  }

  getId() {
    let contacts = this.getContacts();
    let id = contacts.length > 1 ? contacts[contacts.length - 1].id + 1 : 1;

    return id;
  }
}
