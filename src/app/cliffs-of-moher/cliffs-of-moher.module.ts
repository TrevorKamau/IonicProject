import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CliffsOfMoherPageRoutingModule } from './cliffs-of-moher-routing.module';

import { CliffsOfMoherPage } from './cliffs-of-moher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CliffsOfMoherPageRoutingModule
  ],
  declarations: [CliffsOfMoherPage]
})
export class CliffsOfMoherPageModule {}
