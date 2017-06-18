import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';


@Injectable()
export class WebSocketService {

  private url = 'wss://echo.websocket.org';
  private socket;

  constructor() { }
  
  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }

   getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url,  {origins:'http://localhost:*'});
      this.socket.on('message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }
}




 
