import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute,Router} from '@angular/router'

@Injectable()
export class FireBaseService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private af:AngularFireDatabase,private _firebaseAuth: AngularFireAuth,private activatedRoute:ActivatedRoute,private router:Router) { 
        this.user = _firebaseAuth.authState;
    }


   getData(){
    return this.af.list<Listing>('listings')
   }
     
   signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then((data)=>{
      this.userDetails=data;
    })

}

ngOninit(){
 
}

isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
  
logout() {
  debugger;
    this._firebaseAuth.auth.signOut()
    .then((res) => 
    {
      debugger;
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
