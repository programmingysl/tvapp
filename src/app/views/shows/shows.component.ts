import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {NavComponent} from '../nav/nav.component';
import {ActivatedRoute} from '@angular/router';
import get = Reflect.get;
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {Shows} from '../../models/Shows';
import { Episodes} from '../../models/Episodes';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  shows: Shows[];
  showName: string;

  constructor(private mazeApi: TvapiService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.showName = params.get('showName');
      this.getShows();
    });

  }

  getShows(): void {
    this.mazeApi.getShows(this.showName).subscribe((result) => {
      this.shows = [];
      result.map(
        item => {
          this.shows.push(new Shows(item.show));
        }
      );
      this.getEpisodes();
    });
  }

  getEpisodes(): void {
    this.shows.map(show => {
      if (show.prevEpUrl) {
        this.mazeApi.getEpisodeByUrl(show.prevEpUrl).subscribe(res => {
          show.prevEpisode = new Episodes(res);
        });
        if (show.nextEpUrl) {

            this.mazeApi.getEpisodeByUrl(show.nextEpUrl).subscribe(res => {
            show.nextEpisode = new Episodes(res);

          });

        }
      }
      });


  }


}
