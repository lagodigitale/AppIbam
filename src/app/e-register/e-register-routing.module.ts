import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ERegisterPage } from './e-register.page';

const routes: Routes = [
  {
    path: '',
    component: ERegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ERegisterPageRoutingModule {}
