import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewgrangePageRoutingModule } from './newgrange-routing.module';

import { NewgrangePage } from './newgrange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewgrangePageRoutingModule
  ],
  declarations: [NewgrangePage]
})
export class NewgrangePageModule {}
