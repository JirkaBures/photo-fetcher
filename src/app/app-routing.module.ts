import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photo-fetcher',
  },
  {
    path: 'photo-fetcher',
    loadChildren: () =>
      import('./modules/photo-fetcher-routed/photo-fetcher.module').then(
        (m) => m.PhotoFetcherModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
