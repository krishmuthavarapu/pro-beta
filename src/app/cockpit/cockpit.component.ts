import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    severContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    severContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}
  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName);
    this.serverCreated.emit({
      serverName: serverName.value,
      severContent: this.newServerContent,
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      severContent: this.newServerContent,
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }
}
