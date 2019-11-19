import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";
import { Movie } from "../interfaces/movie";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  watchList: any[] = [];

  index: number;

  noMovies: boolean = true;

  constructor(private movieService: MovieFinderService) { }


  checkForEmptyArray() {
    if (this.watchList.length > 0) {
      this.noMovies = false;
    }
  }

  setIndex(index: number) {
    console.log(index);
    this.index = index;
  }

  removeFromWatchList(i: number) {
    this.watchList.splice(i, 1);
  }
  resetIndex() {
    this.index = null;
  }
  ngOnInit() {
    this.watchList = this.movieService.getWatchList();
    this.watchList = this.movieService.watchList;
    this.checkForEmptyArray();
    console.log(this.noMovies);
    console.log(this.watchList);
  }


}
