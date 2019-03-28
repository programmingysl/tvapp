import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {NavComponent} from '../nav/nav.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  shows: object;
  showName: string;
  navArg: NavComponent;

  constructor(private show: TvapiService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {

      this.showName = params.get('showName');
      console.log(this.showName);
    });


  }

  ngOnInit() {

    this.show.getShows(this.showName).subscribe((result) => {
      this.shows = result;

      return this.shows;
    });




  }
}
