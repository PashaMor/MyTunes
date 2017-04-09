import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';




@Injectable()

export class DataService {
  constructor(private jsonp: Jsonp) {

  }
  getItems(search: string) {
    let url = `https://itunes.apple.com/search?term=${search}&callback=JSONP_CALLBACK`;
   return this.jsonp.get(url)
      .toPromise();
  }
}
