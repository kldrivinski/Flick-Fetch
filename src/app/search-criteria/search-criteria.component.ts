import { Component, OnInit } from "@angular/core";
import { MovieFinderService } from "../services/movie-finder.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  movieList: any[];

  constructor(private movieService: MovieFinderService) {}

  getTheMovies(rating: string) {
    this.movieService.getMovieList(rating).subscribe(data => {
      this.movieList = data.results;
      console.log(this.movieList);
      console.log(rating);
    });
  }

  addToWatchList(e): void {
    console.log("checked box");
  }
  ngOnInit() {
    // this.getTheMovies();
  }
}
