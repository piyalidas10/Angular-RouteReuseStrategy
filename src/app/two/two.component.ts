import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.log('TwoComponent initialize');
  }

  goBack(event: MouseEvent): void {
    this.sharedService.goBack(event);
  }

  ngOnDestroy(): void {
    console.log('TwoComponent destroy');
  }

}
