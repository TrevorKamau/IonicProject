import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BunrattyCastlePageRoutingModule } from './bunratty-castle-routing.module';

import { BunrattyCastlePage } from './bunratty-castle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BunrattyCastlePageRoutingModule
  ],
  declarations: [BunrattyCastlePage]
})
export class BunrattyCastlePageModule {}
