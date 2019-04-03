import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {ActivatedRoute} from '@angular/router';
import {Shows} from '../../models/Shows';
import {Episodes} from '../../models/Episodes';
import {Seasons} from '../../models/Seasons';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {


  showId: string;
  show: Shows[]; // holds an array of shows of type Shows class
  season: Seasons []; // holds an array of shows of type Shows class
  episodes: Episodes [];


  constructor(private mazeApi: TvapiService, private route: ActivatedRoute ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.showId = params.get('showId');
      this.getShow();


      this.getSeasons(); /*

      // console.log(this.showId);*/
    });

  }

  getShow(): void {

    this.mazeApi.getShowbyId(this.showId).subscribe(show => {
        this.show = [];
        this.show.push(new Shows(show));
      }
    );
  }

  getShowId(): string {
    return this.showId;
  }

  getSeasons(): void {
    this.mazeApi.getSeasons(this.showId).subscribe((result) => {
      this.season = [];
      result.map(
        item => {
          this.season.push(new Seasons(item));
        }
      );

    });
  }

  getEpisodes(seasonId): void {
    this.mazeApi.getEpisodes(seasonId).subscribe((result) => {
      this.episodes = [];
      result.map(
        item => {
          this.episodes.push(new Episodes(item));
          // console.log(this.episode[0]);
        }
      );

    });
  }

}






