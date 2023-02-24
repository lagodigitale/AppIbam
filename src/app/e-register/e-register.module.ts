import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ERegisterPageRoutingModule } from './e-register-routing.module';

import { ERegisterPage } from './e-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ERegisterPageRoutingModule
  ],
  declarations: [ERegisterPage]
})
export class ERegisterPageModule {}
