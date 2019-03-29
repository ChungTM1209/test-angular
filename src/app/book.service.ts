import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    readonly API_URL = 'http://localhost:3000/book';

    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.API_URL);
    }
    add(book: Partial<Book>): Observable<Book> {
        return this.httpClient.post<Book>(this.API_URL, book);
    }

    getById(id: number): Observable<Book> {
        return this.httpClient.get<Book>(`${this.API_URL}/${id}`);
    }

    update(book: Book, id: number): Observable<Book> {
        return this.httpClient.put<Book> (`${this.API_URL}/${id}`, book);
    }

}
