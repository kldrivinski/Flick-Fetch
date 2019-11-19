import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  status: boolean = false;

  index: number;

  noMovies: boolean = true;

  constructor(private movieService: MovieFinderService) {}

  checkForEmptyArray() {
    if (this.movies.length > 0) {
      this.noMovies = false;
    }
  }
  //   if (this.movies !== undefined) {
  //     this.noMovies = false;
  //   }
  // }

  addToWatchList(movie) {
    // this.noMovies = false;
    this.movieService.setWatchList(movie);
  }

  setIndex(index: number) {
    console.log(index);
    this.index = index;
  }

  resetIndex() {
    this.index = null;
  }

  clickEvent(index) {
    this.index = index;
    this.status = true;
  }
  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.checkForEmptyArray();
    console.log(this.noMovies);
  }
}
