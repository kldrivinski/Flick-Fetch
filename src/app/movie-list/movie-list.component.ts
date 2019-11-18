import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: any[];

  watchList: any[] = [];

  constructor(private movieService: MovieFinderService) {}

  addToWatchList(movie: any[]) {
    // console.log(movie[i]);
    this.watchList.push(movie);
    console.log(this.watchList);
    this.movieService.setWatchList(this.watchList);
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
