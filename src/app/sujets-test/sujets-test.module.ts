import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SujetsTestPageRoutingModule } from './sujets-test-routing.module';

import { SujetsTestPage } from './sujets-test.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SujetsTestPageRoutingModule
  ],
  declarations: [SujetsTestPage]
})


export class SujetsTestPageModule {
  

  
}
