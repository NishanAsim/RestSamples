import { Component,TemplateRef, NgZone, OnInit, Inject} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import {MatBottomSheet, MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { NotifiSignalRService } from './service/notifi-signal-r.service';
import { NotificationService } from './service/notification.service';
import { NotifyMessage } from './Model/notification';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { AppError } from './common/app-error';
import { NotFoundError } from './common/not-found-error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  notificationMessages=new Array<NotifyMessage>();
  nfMessages=new Array<NotifyMessage>();
  notificationMsg =new NotifyMessage();
  public _hubConnecton: HubConnection;
  nCount:number;
  title = 'ClientApp';
  showFiller = false;
  
  //message = 'Pizza party!!! 🍕'
  constructor(private noticationRSignal:NotifiSignalRService,private notifiRService:NotifiSignalRService ,private notifiService:NotificationService,private _ngZone:NgZone,private snackBar:MatSnackBar,private _bottomSheet: MatBottomSheet) {
   // this.items = Array(15).fill(0);
    this.subscribeToEvents();
    this.notifiRService.getAll()
          .subscribe(notifi=>{
            this.notificationMessages=notifi;
            this.nfMessages=notifi;
   });
    
  }
  private subscribeToEvents(): void {
    this.notifiService.messageReceived.subscribe((message: NotifyMessage) => {
      this._ngZone.run(() => { 
          this.notificationMsg=message;
          //console.log(this.notificationMsg);
          this.notificationMessages.push(this.notificationMsg);
          this.openSnackBar(this.notificationMsg.nSummary);
    });
  });
  }
  deleteNotifi(dataNotification){
    let index= this.notificationMessages.indexOf(dataNotification);
    this.notificationMessages.splice(index,1)
    this.noticationRSignal.delete(dataNotification.nId)
    .subscribe(
      null,
    (error: AppError) => {
      this.notificationMessages.splice(index,0,dataNotification);
      if(error instanceof NotFoundError){
        alert('This post has already been deleted.')
      }
      else throw error;
    });

}
filterAlert(value){
  this.nfMessages = this.notificationMessages.filter(ntype=>ntype.nType===value);
}

     ngOnInit():void{
      //  let connection = new HubConnection('http://localhost:5000/Notification');
      //  connection.on('send',data=>{
      //    console.log(data);
      //  });
      //this.subscribeToEvents();
      // this._hubConnecton = new HubConnectionBuilder().withUrl('https://localhost:5001/notifi').build();
      // this._hubConnecton
      // .start()
      // .then(() => console.log('Connection started!'))
      // .catch(err => console.log('Error while establishing connection '));
      // this._hubConnecton.on("send",data=>{
      //   console.log(data);
      //})
        
     }

  openBottomSheet(): void {
    const bottomSheetRef = this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      data: this.notificationMsg,
    });
   // this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  
  openSnackBar(snackMsg) {
    this.snackBar.open(snackMsg, "close", {
      duration: 2000,
    });
  }
//   pizzaParty() {
//     this.openSnackBar(this.message, 'pizza-party');
//   }

//   openSnackBar(message: string, panelClass: string) {
//   this.snackBar.openFromComponent(NotificationBarComponent, {
//     data: message,
//     panelClass: panelClass,
//     duration: 10000
//   });
// }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  modalRef: BsModalRef;
  config = {
    class: 'modal-dialog-center'
  }
  items: any[];
  constructor( private modalService: BsModalService,private noticationRSignal:NotifiSignalRService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }
} 
