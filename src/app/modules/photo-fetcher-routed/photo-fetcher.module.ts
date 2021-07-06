import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFetcherComponent } from './components/photo-fetcher/photo-fetcher.component';
import { PhotoFetcherRoutingModule } from './photo-fetcher-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [PhotoFetcherComponent],
  imports: [
    CommonModule,
    PhotoFetcherRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
})
export class PhotoFetcherModule {}
