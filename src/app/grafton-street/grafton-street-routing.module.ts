import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraftonStreetPage } from './grafton-street.page';

const routes: Routes = [
  {
    path: '',
    component: GraftonStreetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraftonStreetPageRoutingModule {}
