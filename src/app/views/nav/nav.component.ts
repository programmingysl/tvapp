import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';









@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  title: string = 'TV MAZE';
  // query: string = document.forms.item(0).query.value;
  constructor() { }

  ngOnInit() {
  }

}
