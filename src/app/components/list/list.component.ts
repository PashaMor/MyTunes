import { Component, OnInit } from '@angular/core';
import {Item} from '../../module/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[];
  constructor() {
    this.items = [
      {
        name : 'Another Brick In The Wall',
        artist : 'Pink Floyd'
      },
      {
        name : 'People are Strange',
        artist : 'The Doors'
      }

    ];

  }

  ngOnInit() {
  }

}
