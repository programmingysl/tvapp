import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ShowsComponent} from '../shows/shows.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  title: string = 'TV MAZE';
  showName: string = '';

  constructor() { }

  ngOnInit() {
  }

}
