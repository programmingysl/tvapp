import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShowsComponent} from './views/shows/shows.component';
import {EpisodesComponent} from './views/episodes/episodes.component';
import {HomeComponent} from './views/home/home.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import { NavComponent} from './views/nav/nav.component';

const routes: Routes = [

  { path: 'shows/:showName', component: ShowsComponent },
  { path: 'episodes/:showId', component: EpisodesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
