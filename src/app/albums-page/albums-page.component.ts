import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {AlbumsService} from '../shared/services/albums.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {of, Subscription} from 'rxjs';
import {AlbumInterface, AlbumsInterface} from '../shared/interface/albums.interface';
import {LogicAlbumsService} from './logic-albums.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit, OnDestroy, AfterContentChecked {
  albums: AlbumInterface[];
  filter: AlbumInterface[];
  albumsLiked: string;
  aSub: Subscription;
  constructor(private albumsService: AlbumsService, private route: ActivatedRoute, private logicAlbums: LogicAlbumsService) { }
  ngOnInit(): void {
    this.requestData();
  }
  ngAfterContentChecked(): void {
    this.albumsLiked = this.logicAlbums.name;
  }
  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
  requestData(): void {
    this.aSub = this.route.params.pipe(
      switchMap(
        (params: Params) => {
          if (params.genre) {
            this.albums = this.logicAlbums.getObjects(params.genre);
            return this.albumsService.getAlbums(params.genre);
          }
          return of(null);
        }
      )
    )
      .subscribe(
        (response: AlbumsInterface) => {
          if (response) {
            this.albums = this.filterData(response.albums.album);
          }
        }
      );
  }
  filterData(albums: AlbumInterface[]): AlbumInterface[] {
    if (this.albums.length === 0) {
      return this.albums = albums;
    } else {
      this.filter = albums;
      this.albums.forEach((item) => {
        this.filter = this.filter.filter(album => {
          if (album.name !== item.name) {
            return album;
          }
        });
      });
      return this.albums.reverse().concat(this.filter);
    }
  }
  saveAlbum(object: AlbumInterface): void {
    this.logicAlbums.saveObject(object);
  }
  applySearch(search: string): void {
    const foundAlbum = this.logicAlbums.searchObjects(search, this.albums);
    foundAlbum.length !== 0 ? this.albums = foundAlbum : this.requestData();
  }
}
