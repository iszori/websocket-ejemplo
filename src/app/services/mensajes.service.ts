import { Injectable } from '@angular/core'
import { QueueingSubject } from 'queueing-subject'
import { Observable } from 'rxjs/Observable'
import { WebSocketService } from 'angular2-websocket-service'

@Injectable()
export class MensajesService {

  public URL: string = 'wss://echo.websocket.org'; // URL del servicio WebSocket

  private inputStream: QueueingSubject<any>
  public outputStream: Observable<any>

  constructor(private socketFactory: WebSocketService) { }

  public connect() {
    if (this.outputStream)
      return this.outputStream
 
    // Using share() causes a single websocket to be created when the first 
    // observer subscribes. This socket is shared with subsequent observers 
    // and closed when the observer count falls to zero. 
    return this.outputStream = this.socketFactory.connect(
      this.URL,
      this.inputStream = new QueueingSubject<any>()
    );//.share()
  }
 
  public send(message: any):void {
    // If the websocket is not connected then the QueueingSubject will ensure 
    // that messages are queued and delivered when the websocket reconnects. 
    // A regular Subject can be used to discard messages sent when the websocket 
    // is disconnected. 
    this.inputStream.next(message)
  }
}
