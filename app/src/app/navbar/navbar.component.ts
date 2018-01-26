import { Component, OnInit } from '@angular/core';
import {FireBaseService,Listing} from '../services/fire-base-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userDetail?:any=this.fireBaseService.userDetails;
constructor(private fireBaseService:FireBaseService) { }

  ngOnInit() {
  }

  signin(){
  this.fireBaseService.signInWithGoogle();
  
  }

  signout(){
    this.fireBaseService.logout();
    }

}
