import { Component, OnInit, Output, Input } from '@angular/core';
import { IUserAccessConfiguration, IListOfValuesAccessDataType, ListOfValuesAccessDataType } from '../service/functional-module-service';

@Component({
  selector: 'app-access-privilege-configuration',
  templateUrl: './access-privilege-configuration.component.html',
  styleUrls: ['./access-privilege-configuration.component.css']
})
export class UserAccessItemComponent implements OnInit {
  @Input() userAccessItem?: IUserAccessConfiguration | null;
  @Input() customJson: string;
  @Input() customList: IListOfValuesAccessDataType[];
  @Output() value: string;
  @Output() value2: string;


customListItems:  IListOfValuesAccessDataType[];


  constructor() { }

  ngOnInit() {
  }

  public getListDataType = (dataTypeId: number) => {
  let result = this.customList.filter(l => l.userAccessTypeId == dataTypeId);
  if(result)
  {
    return result[0].listItems;
  }
  };

}
