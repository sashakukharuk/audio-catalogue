import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.css']
})
export class CardAlbumComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('albumName') albumName: string;
  // tslint:disable-next-line:no-input-rename
  @Input('artistName') artistName: string;
  // tslint:disable-next-line:no-output-rename no-input-rename
  @Input('image') image: string;
  // tslint:disable-next-line:no-input-rename
  @Input('active') active: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
