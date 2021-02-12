import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.css']
})
export class IconSvgComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('active') active: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
