import { Component, OnInit,Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-notification-bar',
  template: `
  <div class="flex">
  <div class="data">{{data}}</div>
  <div class="dismiss">
    <button mat-icon-button (click)="snackBarRef.dismiss()">
        <mat-icon>close</mat-icon>
      </button>
  </div>
</div>
  `,
  styles: []
})
export class NotificationBarComponent implements OnInit {

  constructor(public snackBarRef: MatSnackBarRef<NotificationBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
