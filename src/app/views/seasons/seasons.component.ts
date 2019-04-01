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
  season: Seasons [];


  constructor(private mazeApi: TvapiService, private route: ActivatedRoute ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.showId = params.get('showId');
      this.getSeasons();
    });
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



}
