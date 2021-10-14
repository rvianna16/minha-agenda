import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  id: number = 0;
  subscription!: Subscription
  contact: any = {};

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute) {      
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });    

    this.contact = this.contactsService.getContact(this.id);    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
