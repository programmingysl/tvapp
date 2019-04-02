import {Component, Input, OnInit} from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {ActivatedRoute} from '@angular/router';

import {Episodes} from '../../models/Episodes';
import {ShowsComponent} from '../shows/shows.component';
import {MatTableModule} from '@angular/material/table';
import {Seasons} from '../../models/Seasons';
import {SeasonsComponent} from '../seasons/seasons.component';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})




export class EpisodesComponent implements OnInit {

  @Input() id: number;
  episode: Episodes [];
  season: Seasons [];

  seasonId: number;
  showId: string;
  displayedColumns: string[] = ['#', 'Name', 'Aired'];

  constructor(private mazeApi: TvapiService, private route: ActivatedRoute) {}


  ngOnInit() {

      /*this.route.paramMap.subscribe(params => {
      this.showId = params.get('showId');*/
      this.route.paramMap.forEach(param => { this.showId = param.get('showId'); } );

      this.getSeasons();

  }

  getSeasons(): void {
    this.mazeApi.getSeasons(this.showId).subscribe((result) => {
      this.season = [];

      result.map(
        item => {

          this.season.push(new Seasons(item));
          // this.seasonId = item.id;

          this.getEpisodes(this.id);

        }
      );
      /* this.getEpisodes(this.seasonId);*/
    }

    );

    console.log('season id: ' + this.mazeApi.seasonId);
  }

  getEpisodes(seasonId): void {
    this.mazeApi.getEpisodes(seasonId).subscribe((result) => {
      this.episode = [];
      result.map(
        item => {
          this.episode.push(new Episodes(item));
          // console.log(this.episode[0]);
        }
      );

    });
  }

}




  /*
  getEpisodes(seasonId): void {
    this.mazeApi.getEpisodes(seasonId).subscribe((result) => {
      this.episode = [];
      result.map(
        item => {
          this.episode.push(new Episodes(item));
           console.log(this.episode[0]);
        }
      );

    });
  }




  getEpisodes(): void {
    this.mazeApi.getEpisodes().subscribe((result) => {
      this.episode = [];
      result.map(
        item => {
          this.episode.push(new Episodes(item));
         // console.log(this.episode[0]);
        }
      );

    });
  }

*/
