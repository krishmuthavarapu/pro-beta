import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  userName = 'Enter';
  disableBtn = true;
  constructor() {}

  ngOnInit(): void {
    if (this.userName) {
      this.disableBtn = false;
    }
  }

  onResetUsername() {
    if ((this.userName = '')) {
      this.disableBtn = false;
    } else {
      this.userName = '';
      this.disableBtn = true;
    }
  }
  onUsernameUpdate(event: any) {
    this.disableBtn = false;
  }
}
