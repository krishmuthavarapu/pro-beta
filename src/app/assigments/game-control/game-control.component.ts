import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  sGame: number;
  @Output() counter = new EventEmitter<number>();
  incNum = 0;
  constructor() { }

  ngOnInit(): void {
  }
  startGame() {
    this.sGame = setInterval(() => {
      this.counter.emit(this.incNum + 1);
      this.incNum++
    }, 1000)


  }
  stopGame() {
    clearInterval(this.sGame)
  }

}
