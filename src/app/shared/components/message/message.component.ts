import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('nameArtist') nameArtist: string;
  // tslint:disable-next-line:no-input-rename
  @Input('album') albumName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
