import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AukroItem } from 'src/app/models/aukro-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotoFetcherService {
  private itemsUrl = '/api/homepage';

  constructor(private readonly http: HttpClient) {}

  getFourRandomItems(): Observable<AukroItem[]> {
    return this.http.get(this.itemsUrl).pipe(
      map(
        (res: any) => res['introPart'][0][0]['content']['items'] as AukroItem[]
      ),
      map((allItems) => this.pickRandomItems(allItems, 4))
    );
  }

  pickRandomItems(arr: AukroItem[], pickCount: number) {
    let items: AukroItem[] = [];
    if (arr.length > pickCount) {
      let usedIndexes: number[] = [];
      while (items.length < pickCount) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (usedIndexes.indexOf(randomIndex) === -1) {
          items.push(arr[randomIndex]);
          usedIndexes.push(randomIndex);
        }
      }
    } else {
      items = arr;
    }
    return items;
  }
}
