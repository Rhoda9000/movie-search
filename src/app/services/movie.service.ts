import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { APIResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'http://www.omdbapi.com/';
  // apiKey: string = '81701446';
  apiKey: string = '4a249f8d';

  constructor(private http: HttpClient) {}

  searchMovie(term: string, page: number = 1) {
    return this.http.get<APIResponse>(
      `${this.baseUrl}?s=${term}&page=${page}&apikey=${this.apiKey}`
    );
  }

  getMovieDetails(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}?i=${id}&apikey=${this.apiKey}&plot=short`
    );
  }
}
