import { Component, OnInit } from '@angular/core';

import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss'],
})
export class ContactNewComponent implements OnInit {
  public name: string = '';
  public number: string = '';

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {}

  addContact() {
    if (this.name.length === 0 || this.number.length === 0) {
      alert('Não pode conter campos vazios');
    } else {
      this.contactsService.contacts.push({
        id: this.contactsService.getId(),
        name: this.name,
        number: this.number,
      });

      alert('Contato criado!');

      this.name = '';
      this.number = '';
    }
  }
}
