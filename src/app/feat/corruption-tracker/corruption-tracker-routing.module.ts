import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./presentation/pages/c-t-landing/c-t-landing.page").then(p => p.CTLandingPage),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import("./presentation/pages/c-t-detail/c-t-detail.page").then(p => p.CTDetailPage),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorruptionTrackerRoutingModule { }
