import { Component, OnInit } from '@angular/core';
import {FireBaseService,Listing} from '../services/fire-base-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  public listings:any;
  constructor(private fireBaseService:FireBaseService) { 
  }


  ngOnInit() {
    this.listings=this.fireBaseService.getData();
  }

}
