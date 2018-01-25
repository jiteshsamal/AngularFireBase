import { Component, OnInit } from '@angular/core';
import {FireBaseService,Listing} from '../services/fire-base-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private fireBaseService:FireBaseService) { }
private isLoggedIn:boolean;
  ngOnInit() {
    console.log(this.fireBaseService.isLoggedIn());
  }

  signin(){
  this.fireBaseService.signInWithGoogle();
  }

  signout(){
    this.fireBaseService.logout();
    }

}
