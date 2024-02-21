import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NavigationExtras, Router} from "@angular/router";
import {BookService} from "../../services/book.service";
import {NavController} from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edition',
  templateUrl: './book-edition.component.html',
  styleUrls: ['./book-edition.component.scss'],
})
export class BookEditionComponent implements OnInit {

     book: Book = {

    };
    selectedBook?: Book;


  publishDate = (new Date()).toISOString();

  constructor(
      private bookService: BookService,
      private navController: NavController,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
          this.book = navigation.extras.state['book'] as Book;
          console.log(this.book);
      }

  }

  saveBook(){
      if(!this.selectedBook){ //estamos creando uno nuevo
          this.book.published = this.publishDate;
          this.bookService.createBook(this.book).then(
              resp =>{
                  const navExtras: NavigationExtras =  {
                      queryParams:{
                          newBook: this.book
                      }
                  };
                  console.log(navExtras);
                  this.navController.navigateForward('reviews');
              }
          );
      }
      else{
          this.bookService.updateBook(this.book)
      }

  }
  checkParam(){
      console.log(this.book);
  }
}
