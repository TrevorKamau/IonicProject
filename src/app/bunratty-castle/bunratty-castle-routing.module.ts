import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BunrattyCastlePage } from './bunratty-castle.page';

const routes: Routes = [
  {
    path: '',
    component: BunrattyCastlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BunrattyCastlePageRoutingModule {}
