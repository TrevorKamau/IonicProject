import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlendaloughPageRoutingModule } from './glendalough-routing.module';

import { GlendaloughPage } from './glendalough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlendaloughPageRoutingModule
  ],
  declarations: [GlendaloughPage]
})
export class GlendaloughPageModule {}
