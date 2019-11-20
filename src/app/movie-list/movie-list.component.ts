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

  onList: boolean = false;

  constructor(private movieService: MovieFinderService) {}

  checkForEmptyArray() {
    if (this.movies !== undefined) {
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
    this.onList = true;
    setTimeout(() => {
      this.onList = false;
    }, 1000);
    // window.alert("added to watchlist");
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
    console.log(this.movies);
  }
  goToTop(event) {
    window.scroll(0, 0);
  }
}
