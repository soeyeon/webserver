import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotIdPageRoutingModule } from './forgot-id-routing.module';

import { ForgotIdPage } from './forgot-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotIdPageRoutingModule
  ],
  declarations: [ForgotIdPage]
})
export class ForgotIdPageModule {}
