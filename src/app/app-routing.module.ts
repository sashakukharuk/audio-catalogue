import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenrePageComponent} from './genre-page/genre-page.component';
import {AlbumsPageComponent} from './albums-page/albums-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/genre', pathMatch: 'full'},
  {path: 'genre', component: GenrePageComponent},
  {path: 'genre/:genre', component: AlbumsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
