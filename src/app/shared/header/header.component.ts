import { Component, OnInit, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSelect(dropDown : string){
    this.featureSelected.emit(dropDown);

  }

}
