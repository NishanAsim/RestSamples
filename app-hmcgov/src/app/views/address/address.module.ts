import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutes } from './address.routing';
import { AdressEditorComponent } from './adress-editor/adress-editor.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatInputModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  declarations: [AdressEditorComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forChild(AddressRoutes)
  ]
})
export class AddressModule { }
