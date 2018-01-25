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
  constructor(private fireBaseService:FireBaseService) {
    
   }

  ngOnInit() {
    //this.signin();
    /*this.fireBaseService.getData().valueChanges().subscribe((data:Listing[])=>{
      this.listings=data;
      console.log(this.listings);
    })
    */
  }
  signin(){
    this.fireBaseService.signInWithGoogle().then(function(data){
     console.log(data);
    });
    }

}


