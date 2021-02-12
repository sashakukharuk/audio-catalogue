import { Component, OnInit } from '@angular/core';
import {AlbumsService} from '../shared/services/albums.service';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent implements OnInit {
  genres = [
    {
      name: 'Hip-Hop',
      img: 'https://img.freepik.com/free-vector/hiphop-music-panda-style_10316-117.jpg?size=338&ext=jpg'
    },
    {
      name: 'Jazz',
      img: 'https://www.napolike.it/wp-content/uploads/2019/01/concerto-epifania-jazz-min.jpg'
    },
    {
      name: 'Rap',
      img: 'https://s3.amazonaws.com/media.al-fanarmedia.org/wp-content/uploads/2018/09/03122129/kanywest.jpg'
    },
    {
      name: 'Pop',
      img: 'https://www.timeshighereducation.com/sites/default/files/Pictures/web/d/d/c/vinyl-record-lyrics-illustration.jpg'
    },
    {
      name: 'Rock',
      img: 'http://cs303701.userapi.com/v303701592/5794/0s8KIOW8YBA.jpg'
    },
    {
      name: 'Classic',
      img: 'https://i.ytimg.com/vi/wVoJAvT21yU/hqdefault.jpg'
    },
  ];
  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
  }
}
