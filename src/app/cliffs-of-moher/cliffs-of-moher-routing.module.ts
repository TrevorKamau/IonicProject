import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CliffsOfMoherPage } from './cliffs-of-moher.page';

const routes: Routes = [
  {
    path: '',
    component: CliffsOfMoherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CliffsOfMoherPageRoutingModule {}
