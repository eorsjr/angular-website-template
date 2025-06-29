import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  { path: 'about',
    component: AboutComponent,
    title: 'About' },
  { path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery'  }
];