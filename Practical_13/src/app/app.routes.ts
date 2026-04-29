import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'product/:id', component: Product },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound }
];
