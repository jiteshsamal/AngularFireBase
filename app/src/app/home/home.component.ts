import { Component, OnInit } from '@angular/core';
import {FireBaseService,Listing} from '../services/fire-base-service.service';
import { AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public listings:Listing[]=[];
  constructor(public fireBaseService:FireBaseService) {
    
   }

  ngOnInit() {
  }

  signin(){
    this.fireBaseService.signInWithGoogle().then(function(){
      this.fireBaseService.getData();
    });
    }

}


