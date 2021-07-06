import { AukroImageLists } from './aukro-image-lists';

export interface AukroItem {
  aukroPlus: boolean;
  biddingPrice: number;
  buyNowPrice: number;
  endingTime: string;
  freeShipping: boolean;
  id: number;
  images: AukroImageLists;
  itemTypeEnumCode: string;
  name: string;
  paymentOnline: boolean;
  paymentViaAukro: boolean;
  priceWithShipping: number;
  seoUrl: string;
  statusAdultContent: boolean;
}
