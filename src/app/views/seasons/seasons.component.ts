import { Component, OnInit } from '@angular/core';
import {TvapiService} from '../../models/services/tvapi.service';
import {ActivatedRoute} from '@angular/router';
import {Shows} from '../../models/Shows';
import {Episodes} from '../../models/Episodes';
import {Seasons} from '../../models/Seasons';
import {EpisodesComponent} from '../episodes/episodes.component';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  showId: string;
  season: Seasons [];
  episode: Episodes [];
  seasonId: string;
  displayedColumns: string[] = ['#', 'Name', 'Aired'];

  constructor(private mazeApi: TvapiService, private route: ActivatedRoute ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.showId = params.get('showId');


      this.getSeasons();
      this.getEpisodes();
    console.log(this.seasonId);
    });

  }


  getSeasons(): void {
    this.mazeApi.getSeasons(this.showId).subscribe((result) => {
      this.season = [];
      result.map(
        item => {
          this.season.push(new Seasons(item));
          this.getEpisodes(this.season.id);
        }
      );

    });
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
