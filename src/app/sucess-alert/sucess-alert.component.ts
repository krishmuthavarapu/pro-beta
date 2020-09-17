import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-alert',
  templateUrl: './sucess-alert.component.html',
  styleUrls: ['./sucess-alert.component.css'],
})
export class SucessAlertComponent implements OnInit {
  allownewserver = true;
  serverCreationStatus = 'Server was not created';
  inputValue = 'Enter';
  constructor() {
    // setTimeout(() => {
    //   this.allownewserver = false;
    // }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreationStatus = 'Server is Created';
    this.allownewserver = false;
  }
  onRemoveServer() {
    if ((this.serverCreationStatus = 'Server was not created')) {
      this.allownewserver = true;
    } else {
      this.serverCreationStatus = 'Server is Removed';
    }
  }
  onUpdateInput(event: any) {
    console.log(event);
    this.inputValue = event.target.value;
  }
}
