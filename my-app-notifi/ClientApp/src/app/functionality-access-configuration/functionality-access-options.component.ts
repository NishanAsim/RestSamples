import { Component, OnInit, Input} from '@angular/core';
import { IFunctionalityAccessConfiguration, IListOfValuesAccessDataType } from '../service/functional-module-service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-functionality-access-options',
  templateUrl: './functionality-access-options.component.html',
  styleUrls: ['./functionality-access-options.component.css']
})
export class UserAccessOptionComponent implements OnInit {
@Input() userAccessConfig: IFunctionalityAccessConfiguration;
@Input() listOfValuesConfig: IListOfValuesAccessDataType[];
  constructor() { }

  ngOnInit() {
  }

  // public get groupName() : string {
  //   if(this.userAccessConfig && this.userAccessConfig.accessGroup)
  //   {
  //     return this.userAccessItem.description;
  //   }
  //   else
  //   {
  //     return "Default";
  //   }
  // }

}
