import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  userName = '';
  disableBtn = true;
  serverCreated = false;
  serverStatus: String = 'Online';
  serverName = 'Test Server';
  servers = ['Serve 1', 'Serve2'];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  ngOnInit(): void {
    if (this.userName) {
      this.disableBtn = false;
    }
  }

  onResetUsername() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverName = 'Server status is' + this.serverName;
  }
  onUsernameUpdate(event: any) {
    this.disableBtn = false;
  }
}
