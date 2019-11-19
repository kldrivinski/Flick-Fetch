import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: any[];

  status: boolean = false;

  index: number;

  constructor(private movieService: MovieFinderService) {}

  addToWatchList(movie) {
    // console.log(movie[i]);
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
  }
}
