import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { NotifyMessage } from '../Model/notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  messageReceived = new EventEmitter<NotifyMessage>();
  connectionEstablished = new EventEmitter<Boolean>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
   }
   sendMessage(message: NotifyMessage) {
    this._hubConnection.invoke('send', message);
  }
  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/notifi')
      .build();
  }
  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log('Hub connection started');
        this.connectionEstablished.emit(true);
      })
      .catch(err => {
        console.log('Error while establishing connection, retrying...');
        setTimeout(function () { this.startConnection(); }, 5000);
      });
  }
  private registerOnServerEvents(): void {
    this._hubConnection.on('send', (data: any) => {
      this.messageReceived.emit(data);
      console.log(data);
    });
  }
}

