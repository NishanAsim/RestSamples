import { Routes } from '@angular/router';
import { AdressEditorComponent } from './adress-editor/adress-editor.component';

export const AddressRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'newaddress',
      component: AdressEditorComponent,
      data: { title: 'NewAddress', breadcrumb: 'NEWADDRESS' }
    }]
  }
];