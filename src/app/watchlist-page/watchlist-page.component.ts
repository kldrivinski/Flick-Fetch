import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  watchList: any[];

  constructor(private movieService: MovieFinderService) {}

  ngOnInit() {
    this.watchList = this.movieService.getWatchList();
  }
}
