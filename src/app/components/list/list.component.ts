import { Component, OnInit } from '@angular/core';
import {Item} from '../../module/item.model';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchQuery: string;
  items: any;
  AllItems: Item[];
  constructor(private ds: DataService) {}

  ngOnInit() {}
  OnSearch() {
    if (!this.searchQuery) {
      this.AllItems = this.items = [];
      return;
    }
    console.log('search>', this.searchQuery);
    this.ds.getItems(this.searchQuery).then((data: any) => {
      this.AllItems = this.items = data._body.results;
      console.log(this.items[0]);
    });
}}

