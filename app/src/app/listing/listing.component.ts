import { Component, OnInit } from '@angular/core';
import {FireBaseService,Listing} from '../services/fire-base-service.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public selectedListing:Listing;
  public listingId:any;
  constructor(private fireBaseService:FireBaseService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.listingId=this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(data=>{
      this.listingId=data['id'];
      this.selectedListing=this.fireBaseService.getListingById(this.listingId);
    });
  }

  

}
