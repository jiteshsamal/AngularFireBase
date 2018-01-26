import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute,Router} from '@angular/router'

@Injectable()
export class FireBaseService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User;
  public listings:Observable<Listing[]>;
  public listData:Listing[]
  constructor(private af:AngularFireDatabase,private _firebaseAuth: AngularFireAuth,
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


    }


   getData(){
      return this.af.list<Listing>('listings').valueChanges()
     
   }


   getListings(){
     return this.listData;
   }

   getListingById(id){
     return this.listData.find(
       function(item){
         if(item.id==id)
         return true;
         else 
         return false;
     })
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
  id?:number
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
