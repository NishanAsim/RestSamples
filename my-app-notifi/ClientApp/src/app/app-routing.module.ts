import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreetableComponent } from './tree-navigation/treetable.component';
import { NotificationdrawerComponent } from './notificationdrawer.component';
import { TreeSample2Component } from './tree-sample2/tree-sample2.component';


const routes: Routes = [
{
  path: 'tree',
  component: TreetableComponent,
},
{
  path: 'tree2',
  component: TreeSample2Component,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
