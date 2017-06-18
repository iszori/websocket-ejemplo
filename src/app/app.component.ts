import { Component, OnInit } from '@angular/core';
//import { WebSocketService } from "app/services/web-socket.service";

import { Subscription } from 'rxjs/Subscription'
import { MensajesService } from "app/services/mensajes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private socketSubscription: Subscription;

  solicitud: any;
  respuesta: any;

  constructor(private _ms: MensajesService) {
    const stream = this._ms.connect(); //.subscribe(data => console.log('Socket connect: ', data));
 
    this.socketSubscription = stream.subscribe(msg => {
      this.respuesta = msg;
      console.log('Mensaje recibido del servidor: ', msg);
    });
  }

  enviarMensaje(msg: string)
  {
    // send message to server, if the socket is not connected it will be sent 
    // as soon as the connection becomes available thanks to QueueingSubject 
    if (msg.length > 0)
    {
        this.solicitud = { mensaje: msg };
        this._ms.send(this.solicitud);    
    }
      
  }
 
  ngOnDestroy() {
    this.socketSubscription.unsubscribe()
  }

  
}
