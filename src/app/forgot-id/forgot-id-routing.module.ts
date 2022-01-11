import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotIdPage } from './forgot-id.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotIdPageRoutingModule {}
