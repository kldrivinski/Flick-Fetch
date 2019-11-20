import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  { path: "watchList", component: WatchlistPageComponent, data: { animation: 'watchList' } },
  { path: "search", component: SearchCriteriaComponent, data: { animation: 'Search' }, },
  { path: "movieList", component: MovieListComponent, data: { animation: 'movieList' } },
  { path: "", redirectTo: "/search", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
