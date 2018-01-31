import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {  FireBaseService } from './fire-base-service.service';

@Injectable()
export class Listingresolver implements Resolve<any> {
  constructor(private ms: FireBaseService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    let id = route.params['id'];

    return this.ms.getSingleListing(id).then(data => {
      if (data) {
        return data;
      } 
    });
  }
}