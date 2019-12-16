import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, BottomSheetOverviewExampleSheet } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule, MAT_SNACK_BAR_DATA, MatIconModule, MatBottomSheetModule, MatListModule,MatSidenavModule,MatButtonModule,MatExpansionModule,MatTooltipModule,MatTreeModule, MatCheckboxModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { TreetableComponent } from './tree-navigation/treetable.component';
import { NotificationdrawerComponent } from './notificationdrawer.component';
import { ApplicationModuleClient } from './service/functional-module-service';
import { TreeSample2Component } from './tree-sample2/tree-sample2.component';
import { UserAccessOptionComponent } from './functionality-access-configuration/functionality-access-options.component';
import { NishanHttpClient } from './service/http-client';
import { UserAccessItemComponent } from './access-privilege-configuration/access-privilege-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent,
    BottomSheetOverviewExampleSheet,
    TreetableComponent,
    NotificationdrawerComponent,
    TreeSample2Component,
    UserAccessOptionComponent,
    UserAccessItemComponent
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
  providers: [{provide: MAT_SNACK_BAR_DATA, useValue: {duration: 2500}},
    ApplicationModuleClient,
    NishanHttpClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
