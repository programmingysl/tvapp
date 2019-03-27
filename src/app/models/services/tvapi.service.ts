import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvapiService {

  constructor(private http: HttpClient) {

    // api call over here
     // = ;

  }

          /*firstClick() { return console.log('Clicked'); }*/
  getShows() {

    // return of(this.shows);
    return this.http.get('http://api.tvmaze.com/search/shows?q=girls');
  }


  /*

   baseUrl = 'https://kosher-api.heroku.com/api/';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {

  const url = this.baseUrl + 'restaurants';

  console.log(this.http.get(url));

  return this.http.get(url);


   */


}
