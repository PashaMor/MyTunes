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

  ngOnInit() {
    this.items = this.AllItems = this.ds.getItems();
  }
  OnSearch(ev) {
    // let query = ev.target.value;
    // console.log(query);

    console.log(this.searchQuery);
    this.items = this.AllItems.filter
     (item => item.artist.toUpperCase().indexOf(this.searchQuery.toUpperCase()) > -1) ||
     (item => item.name.toUpperCase().indexOf(this.searchQuery.toUpperCase()) > -1);
}}

