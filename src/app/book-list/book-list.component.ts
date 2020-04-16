import { Component, OnInit } from '@angular/core';
import { books } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = books;

  constructor() { }

  ngOnInit() {
  }

}
