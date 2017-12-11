import { Component, OnInit } from '@angular/core';
import { Ravintola } from '../ravintola';

@Component({
  selector: 'app-ravintolat',
  templateUrl: './ravintolat.component.html',
  styleUrls: ['./ravintolat.component.css']
})
export class RavintolatComponent implements OnInit {

  ravintola: Ravintola = {
    id: 1,
    nimi: 'Liisan Räkis'
  };

  constructor() { }

  ngOnInit() {
  }

}

