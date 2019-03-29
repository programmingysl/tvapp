import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {NavComponent} from '../nav/nav.component';
import {ActivatedRoute} from '@angular/router';
import get = Reflect.get;
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  shows: object;
  showName: string;
  panelOpenState = false;
  constructor(private show: TvapiService, private route: ActivatedRoute) {




  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.showName = params.get('showName');
      this.getShows();
    });

  }

  getShows(): void {
    this.show.getShows(this.showName).subscribe((result) => {
      this.shows = result;
    });
  }
}
