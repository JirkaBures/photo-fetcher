import { Component, OnInit } from '@angular/core';
import { AukroItem } from 'src/app/models/aukro-item';
import { PhotoFetcherService } from '../../services/photo-fetcher.service';

@Component({
  selector: 'app-photo-fetcher',
  templateUrl: './photo-fetcher.component.html',
  styleUrls: ['./photo-fetcher.component.scss'],
})
export class PhotoFetcherComponent implements OnInit {
  items: AukroItem[] = [];
  isGray = false;

  constructor(private photoFetcherService: PhotoFetcherService) {}

  ngOnInit(): void {
    this.getFourRandomItems();
  }

  getFourRandomItems() {
    this.photoFetcherService
      .getFourRandomItems()
      .subscribe((items) => (this.items = items));
  }

  toggleGrayscale() {
    this.isGray = !this.isGray;
  }
}
