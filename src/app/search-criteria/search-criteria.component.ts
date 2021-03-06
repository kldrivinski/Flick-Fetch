import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";
import { Router } from "@angular/router";
import { trigger, transition, animate, style } from "@angular/animations";

// import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"],
  animations: [
    trigger("fadeInAndOut", [
      transition(":enter", [style({ opacity: 0 }), animate("0.5s")]),
      transition(":leave", [animate("0.5s", style({ opacity: 0 }))])
    ])
  ]
})
export class SearchCriteriaComponent implements OnInit {
  movieList: any[];

  constructor(
    private movieService: MovieFinderService,
    private router: Router
  ) { }

  getTheMovies(rating: string, genre: string, year: string) {
    let genreCode = "0";
    switch (genre) {
      case "Action":
        genreCode = "28";
        break;
      case "Adventure":
        genreCode = "12";
        break;
      case "Animation":
        genreCode = "16";
        break;
      case "Comedy":
        genreCode = "35";
        break;
      case "Crime":
        genreCode = "80";
        break;
      case "Documentary":
        genreCode = "99";
        break;
      case "Drama":
        genreCode = "18";
        break;
      case "Family":
        genreCode = "10751";
        break;
      case "Fantasy":
        genreCode = "14";
        break;
      case "History":
        genreCode = "36";
        break;
      case "Horror":
        genreCode = "27";
        break;
      case "Music":
        genreCode = "10402";
        break;
      case "Mystery":
        genreCode = "9648";
        break;
      case "Romance":
        genreCode = "10749";
        break;
      case "Science Fiction":
        genreCode = "878";
        break;
      case "Thriller":
        genreCode = "53";
        break;
      case "Western":
        genreCode = "37";
        break;
      case "":
        genreCode = "";
        break;
    }

    this.movieService.getMovieList(rating, genreCode, year).subscribe(data => {
      this.movieList = data.results;
      this.movieService.setMovies(this.movieList);
      console.log(this.movieList);
      console.log(rating);
      this.router.navigate(["movieList"]);
    });
  }

  // onSubmit(): void {}

  ngOnInit() {
    // this.getTheMovies();
  }
}
