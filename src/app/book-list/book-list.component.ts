import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { books } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = books;
  @Output() showDetail = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


}
