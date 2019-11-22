import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, BottomSheetOverviewExampleSheet } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule, MAT_SNACK_BAR_DATA, MatIconModule, MatBottomSheetModule, MatListModule,MatSidenavModule,MatButtonModule,MatExpansionModule,MatTooltipModule,MatTreeModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { TreetableComponent } from './tree-navigation/treetable.component';
import { NotificationdrawerComponent } from './notificationdrawer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent,
    BottomSheetOverviewExampleSheet,
    TreetableComponent,
    NotificationdrawerComponent
  ],
  entryComponents: [
    NotificationBarComponent,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DATA, useValue: {duration: 2500}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
