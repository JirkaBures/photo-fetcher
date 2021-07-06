import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFetcherComponent } from './components/photo-fetcher/photo-fetcher.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoFetcherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoFetcherRoutingModule { }
