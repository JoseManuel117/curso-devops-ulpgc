import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: '',
    redirectTo: 'reviews',
    pathMatch: 'full'
  },
  {
    path: 'review-edition',
    loadChildren: () => import('./pages/review-edition/review-edition.module').then( m => m.ReviewEditionPageModule)
  },
  {
    path: 'book-edition',
    loadChildren: () => import('./pages/book-edition/book-edition.module').then(m => m.BookEditionModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
