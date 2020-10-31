import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-fourth',
  templateUrl: './assignment-fourth.component.html',
  styleUrls: ['./assignment-fourth.component.css']
})
export class AssignmentFourthComponent implements OnInit {
  oddNumber:number[]= [];
  evenNumber:number[] = [];
  counterClick(counter: number){
   console.log(counter);
   if(counter%2 === 0){
     this.evenNumber.push(counter);
   }else{
     this.oddNumber.push(counter)
   }
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
