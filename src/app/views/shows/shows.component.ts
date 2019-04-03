import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {ActivatedRoute} from '@angular/router';
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
  // constructor args making object variables of tv service and ActivatedRoute to load components
  ngOnInit() {
    // getting the parameter from router called showName app.routing.module.ts shows/:showName
    this.route.paramMap.subscribe(params => {
      this.showName = params.get('showName');
      this.getShows();
    });

  }
 // fetching the shows base on a service api call using argument showName and pushing results to an array and instantiating the class show
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
//getting the names of previus episode and / or next episodes base on the url of that episode inthe show search json api
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
