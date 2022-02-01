import { Component, OnDestroy, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.log('OneComponent initialize');
  }

  goBack(event: MouseEvent): void {
    this.sharedService.goBack(event);
  }

  ngOnDestroy(): void {
    console.log('OneComponent destroy');
  }

}
