import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlendaloughPage } from './glendalough.page';

const routes: Routes = [
  {
    path: '',
    component: GlendaloughPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlendaloughPageRoutingModule {}
