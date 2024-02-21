import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NavigationExtras} from "@angular/router";
import {BookService} from "../../services/book.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-book-edition',
  templateUrl: './book-edition.component.html',
  styleUrls: ['./book-edition.component.scss'],
})
export class BookEditionComponent implements OnInit {

     book: Book = {
         id: 99999,
         name: 'Esto Sí tendría que haberse subido',
         author: 'ignorar el resto',
         published: 'Esto no tendría que haberse subido',
         isbn: '123456789',
         cover: 'https://static.wikia.nocookie.net/joke-battles/images/d/df/Gigachad.png/revision/latest?cb=20230812064835'
    };

  publishDate = (new Date()).toISOString();

  constructor(
      private bookService: BookService,
      private navController: NavController
  ) { }

  ngOnInit() {}

  saveBook(){
    this.bookService.createBook(this.book).then(
        resp =>{
          const navExtras: NavigationExtras =  {
            queryParams:{
              newReview: this.book
            }
          };
          console.log(navExtras);
          this.navController.navigateForward('reviews');
        }
    );
  }
  checkParam(){
      console.log(this.book);
  }
}
