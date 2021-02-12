import {AfterContentChecked, EventEmitter, Component, OnInit, Output} from '@angular/core';
import {LogicAlbumsService} from '../logic-albums.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  search: string;
  likes: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSearch = new EventEmitter<string>();
  constructor(private logicAlbumsService: LogicAlbumsService) { }
  ngOnInit(): void {
  }
  ngAfterContentChecked(): void {
    this.likes = this.logicAlbumsService.getQuantityLike();
  }
  onChange(): void {
    this.onSearch.emit(this.search);
  }
}
