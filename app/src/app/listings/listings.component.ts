import { Component, OnInit } from '@angular/core';
import {FireBaseService,Listing} from '../services/fire-base-service.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  public listings:Listing[]=[];
  constructor(private fireBaseService:FireBaseService) { 
  }

  ngOnInit() {
    this.fireBaseService.getData().valueChanges().subscribe((data:Listing[])=>{
      this.listings=data;
      console.log(this.listings);
    })
  }

}
