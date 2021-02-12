import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenrePageComponent } from './genre-page/genre-page.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { HeaderComponent } from './albums-page/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { MessageComponent } from './shared/components/message/message.component';
import { CardAlbumComponent } from './shared/components/card-album/card-album.component';
import { IconSvgComponent } from './shared/components/icon-svg/icon-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    GenrePageComponent,
    AlbumsPageComponent,
    HeaderComponent,
    MessageComponent,
    CardAlbumComponent,
    IconSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
