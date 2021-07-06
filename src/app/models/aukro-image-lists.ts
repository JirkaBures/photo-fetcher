import { AukroImage } from './aukro-image';

export interface AukroImageLists {
  lists: {
    large: AukroImage[];
    medium: AukroImage[];
    original: AukroImage[];
    small: AukroImage[];
  };
}
