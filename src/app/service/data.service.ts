import { Injectable } from '@angular/core';
import {Item} from '../module/item.model';

const ITEMS: Item[] = [
  {
    name : 'Another Brick In The Wall',
    artist : 'Pink Floyd'
  },
  {
    name : 'People are Strange',
    artist : 'The Doors'
  }

];
@Injectable()

export class DataService {
  constructor() {

  }
  getItems(): Item[] {
    return ITEMS;
  }
}
