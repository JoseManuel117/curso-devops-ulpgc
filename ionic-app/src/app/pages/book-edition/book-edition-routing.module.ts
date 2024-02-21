import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEditionComponent } from './book-edition.component';

const routes: Routes = [
    {
        path: '',
        component: BookEditionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookEditionRoutingModule { }
