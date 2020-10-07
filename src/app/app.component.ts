import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { name: 'Server 1', type: 'server', content: 'something about server' },
  ];
  title = 'Test Project';

  onServerAdded(serverData: { serverName: string; severContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.severContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    severContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.severContent,
    });
  }
}
