import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreetableComponent } from './tree-navigation/treetable.component';
import { NotificationdrawerComponent } from './notificationdrawer.component';


const routes: Routes = [
{
  path: 'tree',
  component: TreetableComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
