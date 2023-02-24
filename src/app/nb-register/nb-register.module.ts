import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NbRegisterPageRoutingModule } from './nb-register-routing.module';

import { NbRegisterPage } from './nb-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbRegisterPageRoutingModule
  ],
  declarations: [NbRegisterPage]
})
export class NbRegisterPageModule {}
