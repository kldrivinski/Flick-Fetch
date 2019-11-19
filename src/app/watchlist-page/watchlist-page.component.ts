import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";
import { Movie } from "../interfaces/movie";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  watchList: any[];

  index: number;

  constructor(private movieService: MovieFinderService) {}

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

    console.log(this.watchList);
  }
}
