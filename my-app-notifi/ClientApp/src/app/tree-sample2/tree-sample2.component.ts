import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ApplicationModule, IModuleAccessConfiguration } from '../service/functional-module-service';
import { NishanHttpClient } from '../service/http-client';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [
//       {name: 'Apple'},
//       {name: 'Banana'},
//       {name: 'Fruit loops'},
//     ]
//   }, {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [
//           {name: 'Broccoli'},
//           {name: 'Brussel sprouts'},
//         ]
//       }, {
//         name: 'Orange',
//         children: [
//           {name: 'Pumpkins'},
//           {name: 'Carrots'},
//         ]
//       },
//     ]
//   },
// ];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-tree-sample2',
  templateUrl: './tree-sample2.component.html',
  styleUrls: ['./tree-sample2.component.css']
})
export class TreeSample2Component {
  treeControl = new NestedTreeControl<ApplicationModule>(node => node.subModules);
  dataSource = new MatTreeNestedDataSource<ApplicationModule>();
  moduleAccessList: IModuleAccessConfiguration;

  constructor(moduleService: NishanHttpClient) {
    this.getModuleAccess(moduleService);
    this.moduleAccessList = null;
    moduleService.get<ApplicationModule[]>("http://localhost/UserAuthorization" + "/ApplicationModule/Get/2")
      .subscribe(
        (x: ApplicationModule[]) => {
          console.log('Observer got a next value: ' + x.length);
          // x[0].children = x[0].subModules;
          this.dataSource.data = x;
        },
        (err: string) => console.error('Observer got an error: ' + err),
        () => {
          // this.getModuleAccess(moduleService);
          console.log('Observer got a complete notification');
          console.log("Data loaded, nodes  :" + this.dataSource.data.length);
          this.dataSource.data.forEach(i => console.log("Loaded " + i.level + " " + i.description));
          // this.treeControl.expandAll();
        }
      );
    //this.dataSource.data = TREE_DATA;
  }

  private getModuleAccess(httpClient: NishanHttpClient) {
    httpClient.get<IModuleAccessConfiguration>("http://localhost/UserAuthorization" + "/ApplicationModule/GetList/2")
      .subscribe((result => 
        this.moduleAccessList = result)
        );
  }

  hasChild = (_: number, node: ApplicationModule) => !!node.subModules && node.subModules.length > 0;

  /**
   * getUserAccessConfig
  
   */
  public getUserAccessConfig(moduleId:number) {
    if (this.moduleAccessList && moduleId) {
      for (let moduleAccess of this.moduleAccessList.accessConfiguration) {
        if (moduleAccess.moduleId == moduleId) {
          return moduleAccess;
        }
      }
    }
    else {
      return null;
    }
  }
}
