import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class MovieFinderService {


  constructor(private http: HttpClient) { }

  getMovieList(rating: string): Observable<any> {
    return this.http.get("http://api.themoviedb.org/3/discover/movie?", {
      params: {
        certification_lte: rating,
        apiKey: "4df60c7a99b0e49c00d697427b5ff10d",
      }

    })
  }

}




//Example👇
// getMovieList(): Observable<any> {
//   return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4df60c7a99b0e49c00d697427b5ff10d&language=en-US&page=1")
// }


// // 👇Main URL
// http://api.themoviedb.org/3/discover/movie?


// API key
// 4df60c7a99b0e49c00d697427b5ff10d

// example request
// https://api.themoviedb.org/3/movie/550?api_key=4df60c7a99b0e49c00d697427b5ff10d


// example of how david did it
// getNews(topic:string):Observable<any> {
//   // construct URL with additional query parameters
//   return this.http.get("https://newsapi.org/v2/everything?from=2019-10-15&sortBy=publishedAt", {
//     params: { // safely add these three query parameters to the URL
//       q: topic,
//       apiKey: API_KEY,
//       language: "en"
//     }
//   })
// }