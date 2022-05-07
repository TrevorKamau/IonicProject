import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraftonStreetPageRoutingModule } from './grafton-street-routing.module';

import { GraftonStreetPage } from './grafton-street.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraftonStreetPageRoutingModule
  ],
  declarations: [GraftonStreetPage]
})
export class GraftonStreetPageModule {}
