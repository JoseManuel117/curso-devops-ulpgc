import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(protected http: HttpClient) {

  }
  newBook = new EventEmitter<Book>();
  deletedBook = new EventEmitter<number>();

  getBooks(size? :number): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('page', 0);
    params = params.append('size', !!size ? size: 50);
    params = params.append('sortDir', 'asc');
    params = params.append('sort', 'id');
    return this.http.get<Book[]>(environment.urlAPI + '/books', { params });
  }

  createBook(book: Book) {
    return new Promise((resolve) => {
      this.http.post<Book>(environment.urlAPI + '/books', book) 
        .subscribe((response: Book) => { 
          this.newBook.emit(response);
          resolve(true);
        });
    });
  }
  updateBook(book: Book) {
    return this.http.put(environment.urlAPI + '/books/' + book.id, book);
  }

  deleteReview(bookId: number) {
    return new Promise(resolve => {
      return this.http.delete(environment.urlAPI + '/books/' + bookId)
      .subscribe( (response) => {
        this.deletedBook.emit(bookId);
        resolve(true);
      });
    });
  }

}
