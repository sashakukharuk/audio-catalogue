import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AlbumsInterface} from '../interface/albums.interface';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  constructor(private http: HttpClient) {
  }
  getAlbums(genre: string): Observable<AlbumsInterface> {
    return this.http.get<AlbumsInterface>(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${process.env.TOKEN}&format=json`);
  }
}

