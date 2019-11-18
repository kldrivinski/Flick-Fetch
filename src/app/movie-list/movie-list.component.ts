import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: any[];

  constructor(private movieService: MovieFinderService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
