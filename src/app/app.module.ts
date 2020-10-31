import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { FourthComponent } from './assigments/fourth/fourth.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { AssignmentFourthComponent } from './assigments/assignment-fourth/assignment-fourth.component';
import { GameControlComponent } from './assigments/game-control/game-control.component';
import { OddComponent } from './assigments/odd/odd.component';
import { EvenComponent } from './assigments/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    WarningAlertComponent,
    SucessAlertComponent,
    FourthComponent,
    CockpitComponent,
    ServerElementComponent,
    AssignmentFourthComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
