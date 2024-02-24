import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'corruption-tracker'
  },
  {
    path: 'corruption-tracker',
    loadChildren: () => import("./feat/corruption-tracker/corruption-tracker.module").then(m => m.CorruptionTrackerModule),
  }
];
