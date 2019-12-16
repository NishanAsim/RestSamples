import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { ApplicationModule, ApplicationModuleClient, IApplicationModule } from '../service/functional-module-service';
// import { basename } from 'path';
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
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-treetable',
  templateUrl: './treetable.component.html',
  styleUrls: ['./treetable.component.css']
})
export class TreetableComponent implements OnInit {
  private _transformer = (node: ApplicationModule, level: number) => {
    return {
      expandable: node.hasChildren ,
      name: node.description,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.subModules);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(public moduleService: ApplicationModuleClient) {
    moduleService.get2(2).subscribe(
      x => {console.log('Observer got a next value: ' + x.length);
      // x[0].children = x[0].subModules;
                  this.dataSource.data = x;
    },
      err => console.error('Observer got an error: ' + err),
      () => {
        console.log('Observer got a complete notification');
        console.log("Data loaded, nodes  :" + this.dataSource.data.length);
        this.dataSource.data.forEach(i=> console.log("Loaded " + i.level + " " + i.description));
      // this.treeControl.expandAll();
    }
      );
    //this.dataSource.data =result;
   }

  ngOnInit() {
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
