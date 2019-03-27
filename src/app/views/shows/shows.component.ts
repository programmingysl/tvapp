import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  shows: object;

  constructor(private show: TvapiService) { }

  ngOnInit() {

    this.show.getShows().subscribe(show => {this.shows = show
    console.log(this.shows);

    });
  }

}
