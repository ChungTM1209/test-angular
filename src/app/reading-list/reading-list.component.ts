import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reading-list',
    templateUrl: './reading-list.component.html',
    styleUrls: ['./reading-list.component.sass']
})
export class ReadingListComponent implements OnInit {
    books: Book[];
    book: Book;
    bookForm: FormGroup;
    editForm: FormGroup;

    constructor(private bookService: BookService,
                private formBuilder: FormBuilder,
                private route: Router) {
    }
    ngOnInit() {
        this.getAll();
        this.bookForm = this.formBuilder.group({
            name: [''],
            read: false
        });
    }

    getAll() {
        return this.bookService.getAll().subscribe(data => this.books = data);
    }

    read(id: number) {
        this.editById(id);
        this.update(id);
    }

    editById(id: number) {
        return this.bookService.getById(id).subscribe(data => {
            this.book = data;
            this.editForm = this.formBuilder.group({
                name: [''],
                read: ['']
            });
            this.editForm.patchValue({
                name: this.book.name,
                read: !this.book.read
            });
        });
    }

    update(id: number) {
        const {value} = this.editForm;
        console.log(value);
        return this.bookService.update(value, id).subscribe(() => alert('Đã đọc'));
    }

    add() {
        const {value} = this.bookForm;
        return this.bookService.add(value).subscribe(next => {
            this.books.unshift(next);
            this.bookForm.reset({
                name: '',
                read: ''
            });
        });
    }
}
