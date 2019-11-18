import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";
import { Movie } from "../interfaces/movie";
import { ShowDescription } from "../interfaces/show-description";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: ShowDescription[];

  watchList: any[] = [];

  status: boolean = true;

  index: number;

  constructor(private movieService: MovieFinderService) {}

  addToWatchList(movie: any[]) {
    // console.log(movie[i]);
    this.watchList.push(movie);
    console.log(this.watchList);
    this.movieService.setWatchList(this.watchList);
  }

  setIndex(index: number) {
    console.log(index);
    this.index = index;
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
