import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShowsComponent} from './views/shows/shows.component';
import {EpisodesComponent} from './views/episodes/episodes.component';
import {HomeComponent} from './views/home/home.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import { NavComponent} from './views/nav/nav.component';
import {SeasonsComponent} from './views/seasons/seasons.component';

const routes: Routes = [

  { path: 'shows/:showName', component: ShowsComponent },
  { path: 'seasons/:showId', component: SeasonsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
