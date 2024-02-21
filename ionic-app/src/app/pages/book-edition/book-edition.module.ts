import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import {BookEditionComponent} from "./book-edition.component";
import {BookEditionRoutingModule} from "./book-edition-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [BookEditionComponent],
    imports: [
        CommonModule,
        BookEditionRoutingModule,
        IonicModule,
        FormsModule
    ]
})
export class BookEditionModule { }

