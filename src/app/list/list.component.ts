import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('ListComponent initialize');
  }

  ngOnDestroy(): void {
    console.log('ListComponent destroy');
  }

}
