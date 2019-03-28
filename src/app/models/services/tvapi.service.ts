import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ShowsComponent} from '../../views/shows/shows.component';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class TvapiService {

  baseurl = 'http://api.tvmaze.com/search/shows?q=';


  constructor(private http: HttpClient) {}

  /*firstClick() { return console.log('Clicked'); }*/
  getShows(showsname: string): Observable<any> {
    console.log(this.http.get(this.baseurl + showsname));

    return this.http.get(this.baseurl + showsname);
  }

}
  /*

   baseUrl = 'https://kosher-api.heroku.com/api/';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {

  const url = this.baseUrl + 'restaurants';

  console.log(this.http.get(url));

  return this.http.get(url);


   */



