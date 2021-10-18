import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showMenu: boolean = false;

  constructor(private authServices: AuthService) {
    
  }

  ngOnInit() {
    this.authServices.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );

  }
}
