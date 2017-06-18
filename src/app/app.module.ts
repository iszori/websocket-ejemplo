import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { WebSocketService } from "app/services/web-socket.service";
import { WebSocketService } from 'angular2-websocket-service'
import { MensajesService } from "app/services/mensajes.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    WebSocketService,
    MensajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
