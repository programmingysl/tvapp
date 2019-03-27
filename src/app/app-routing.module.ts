import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShowsComponent} from './views/shows/shows.component';
import {EpisodesComponent} from './views/episodes/episodes.component';
import {HomeComponent} from './views/home/home.component';

const routes: Routes = [

  { path: 'shows/:queryShows', component: ShowsComponent },
  { path: 'episodes/:showId', component: EpisodesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
