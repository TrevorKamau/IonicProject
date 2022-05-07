import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewgrangePage } from './newgrange.page';

const routes: Routes = [
  {
    path: '',
    component: NewgrangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewgrangePageRoutingModule {}
