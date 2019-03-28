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

  constructor(private show: TvapiService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {

      this.showName = params.get('showName');
    });


  }

  ngOnInit() {

    this.show.getShows(this.showName).subscribe((result) => {
      this.shows = result;
      console.log(result);

    });




  }
  getShowName() {
    return this.showName;
  }
}
