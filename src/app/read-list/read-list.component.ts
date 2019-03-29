import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.sass']
})
export class ReadListComponent implements OnInit {
  books: Book[];
  editForm: FormGroup;
  book: Book;
  constructor(private bookService: BookService,
              private formBuilder: FormBuilder,
              private route: Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    return this.bookService.getAll().subscribe(data => this.books = data);
  }
  readAgain(id: number) {
    this.editById(id);
    this.update(id);
  }

  editById(id: number) {
    return this.bookService.getById(id).subscribe(data => {
      this.book = data;
      this.editForm = this.formBuilder.group({
        name: '',
        read: ''
      });
      this.editForm.patchValue({
        name: this.book.name,
        read: !this.book.read
      });
    });
  }

  update(id: number) {
    const {value} = this.editForm;
    return this.bookService.update(value, id).subscribe(() => alert('Đọc lại!'));
  }

}
