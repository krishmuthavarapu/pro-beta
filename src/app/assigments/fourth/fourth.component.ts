import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
})
export class FourthComponent implements OnInit {
  paraData = 'Some Random Data';
  dataState: boolean = false;
  firstNum = 1;
  arrayData = [0];
  constructor() {}

  ngOnInit(): void {}
  toggleData() {
    //  this.dataState === false ? true : false;
    if (this.dataState === false) {
      this.dataState = true;
    } else {
      this.dataState = false;
    }
    this.arrayData.push(this.firstNum++);
    console.log(this.arrayData);
  }
  getBg() {
    return this.arrayData.length > 5 ? 'blue' : 'white';
  }
}
