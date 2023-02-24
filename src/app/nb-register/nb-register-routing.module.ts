import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbRegisterPage } from './nb-register.page';

const routes: Routes = [
  {
    path: '',
    component: NbRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NbRegisterPageRoutingModule {}
