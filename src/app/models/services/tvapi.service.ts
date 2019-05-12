import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvapiService {

  baseurl = 'https://api.tvmaze.com/';
  seasonId: number;

 // dependency injection of the http client in order to return an accessible JSON object (not a string) when we get the api url
 // for all methods in this service
  constructor(private http: HttpClient) {}


  getShows(showsname: string): Observable<any[]> {


    return this.http.get<any[]>(this.baseurl + 'search/shows?q=' + showsname);
  }

  getEpisodeByUrl(episodeUrl: string): Observable<any> {
    return this.http.get(episodeUrl);
  }

// /seasons/:id/episodes
  getEpisodes(seasonID: number): Observable <any[]> {
    this.seasonId = seasonID;
    return this.http.get<any[]>(this.baseurl + 'seasons/' + seasonID + '/episodes');

  }

  getShowbyId(showId: string): Observable <any>{

    return this.http.get<any>(this.baseurl + 'shows/' + showId);

  }
  getSeasons(showId: string): Observable <any> {

    return this.http.get<any>(this.baseurl + 'shows/' + showId + '/seasons');
  }

}




