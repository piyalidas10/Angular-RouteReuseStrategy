import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router, private location: Location) { }

  goBack(event: MouseEvent, localtionUrl?: string) {
    event.preventDefault();
    if (localtionUrl) {
      this.router.navigateByUrl(localtionUrl);
    } else {
      this.location.back();
    }
  }
}
