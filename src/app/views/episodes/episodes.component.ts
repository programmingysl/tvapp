import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {ActivatedRoute} from '@angular/router';
import {Shows} from '../../models/Shows';
import {Episodes} from '../../models/Episodes';
import {MatCardModule} from '@angular/material/card';
import {ShowsComponent} from '../shows/shows.component';
import {MatTableModule} from '@angular/material/table';
import {Seasons} from '../../models/Seasons';







@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})





export class EpisodesComponent implements OnInit {

  showId: string;
  show: Shows[];
  episode: Episodes [];
  seasonId: string;

  constructor(private mazeApi: TvapiService, private route: ActivatedRoute) {
  }


  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.showId = params.get('showId');
      this.getEpisodes();
      this.getShow();
    });


  }


  getEpisodes(): void {
    this.mazeApi.getEpisodes(this.seasonId).subscribe((result) => {
      this.episode = [];
      result.map(
        item => {
          this.episode.push(new Episodes(item));
         // console.log(this.episode[0]);
        }
      );

    });
  }



  getShow(): void {

    this.mazeApi.getShowbyId(this.showId).subscribe(show => {
        this.show = [];
        this.show.push(new Shows(show));
      }
    );
  }

}
