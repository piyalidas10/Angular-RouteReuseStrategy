import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.log('ThreeComponent initialize');
  }

  goBack(event: MouseEvent): void {
    const locationUrl = '/two';
    this.sharedService.goBack(event, locationUrl);
  }

  ngOnDestroy(): void {
    console.log('ThreeComponent destroy');
  }

}
