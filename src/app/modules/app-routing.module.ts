import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { WelcomeGuard } from '../guards/welcome.guard';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { 
    path:'', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [WelcomeGuard],
  },
  {
    path: 'book-details', 
    redirectTo: 'book-details/0'
  },
  { 
    path:'**', redirectTo: 'welcome', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
