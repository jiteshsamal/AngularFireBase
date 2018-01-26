import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FireBaseService} from '../app/services/fire-base-service.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DropdowndirectiveDirective } from './common/dropdowndirective.directive';

const routes:Routes=[
  {path:'',component:HomeComponent },
  {path:'listings',component:ListingsComponent },
  {path:'listings/:id',component:ListingComponent },
  {path:'addListings',component:AddListingComponent },
  {path:'profile',component:ListingComponent}
]



 const config = {
  apiKey: "AIzaSyD-NfLb3LE0aovbicx8V5A6vPIUSxAyJYM",
  authDomain: "ang-firebase-ed833.firebaseapp.com",
  databaseURL: "https://ang-firebase-ed833.firebaseio.com",
  projectId: "ang-firebase-ed833",
  storageBucket: "ang-firebase-ed833.appspot.com",
  messagingSenderId: "865348225077"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    ListingsComponent,
    AddListingComponent,
    EditListingComponent,
    NavbarComponent,
    DropdowndirectiveDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(config,'angular-auth-firebase'),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule
    
  ],
  providers: [FireBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
