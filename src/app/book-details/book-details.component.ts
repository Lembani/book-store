import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { books } from '../books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.book = books[+params.get('bookId')];
    });
  }

}
