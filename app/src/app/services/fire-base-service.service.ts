import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FireBaseService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User;
  public listingDetauils:Observable<any[]>;
  public listItemref:AngularFireList<any>;
  public listData:Listing[]
  constructor(private af:AngularFireDatabase,private _firebaseAuth: AngularFireAuth,private httpClient:HttpClient,
              private activatedRoute:ActivatedRoute,private router:Router) { 
              this.user = _firebaseAuth.authState;
              this.user.subscribe(
                (user) => {
                  if (user) {
                    this.userDetails = user;
                  }
                  else {
                    this.userDetails = null;
                  }
                }
              );
              this.listItemref = this.af.list('listings');
    }


   getData(){
       this.listingDetauils= this.listItemref.valueChanges();
       return this.listingDetauils;
   }


   getListings(){
     //return this.listData;
     return this.httpClient.get('https://ang-firebase-ed833.firebaseio.com/listings.json')
   }

  

   getSingleListing(key){
     return this.httpClient.get('https://ang-firebase-ed833.firebaseio.com/listings/-Kdl_wRRkn7nJxgz4B54.json').toPromise();
    
   }
     
   signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
}

isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
  
logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => {
    this.userDetails=null;
    this.router.navigate(['/'])
  }).catch(function(error){
    console.log(error);
  });
  }






}


export  interface Listing{
  $key?:string
  bedrooms? : string,
  city? : string,
  image? : string,
  owner? : string,
  path : string,
  price : string,
  title? : string,
  type? : string
}
