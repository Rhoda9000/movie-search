import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIResponse } from './models/api-response.model';
import { Movie } from './models/movie.model';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'movie-search';
  form = new FormGroup({
    searchTerm: new FormControl('', Validators.required),
  });
  movies: Movie[] = Array<Movie>();
  length = 100;
  pageSize = 10;
  page = 1;
  pageSizeOptions: number[] = [10];
  pageEvent: PageEvent | any;

  constructor(private movieService: MovieService) {}

  receiveMessage(voiceSearchTerm: string) {
    if (
      voiceSearchTerm != this.form.value.searchTerm &&
      voiceSearchTerm.length != 0
    ) {
      this.form.patchValue({
        searchTerm: voiceSearchTerm,
      });
    }
  }

  onSubmit() {
    this.loadMovies();
  }

  loadMovies(event: PageEvent | any = null) {
    this.movies = [];

    if (event == null) {
      event = new PageEvent();
      event.pageIndex = 1;
    }

    this.page = event?.pageIndex;
    this.movieService
      .searchMovie(this.form.value.searchTerm, this.page)
      .subscribe(
        (data: APIResponse) => {
          if (data.Error) {
            window.alert(data.Error);
          }

          this.length = data.totalResults;

          data?.Search?.forEach((item) => {
            this.movieService.getMovieDetails(item.imdbID).subscribe(
              (data: Movie) => {
                this.movies.push(data);
              },
              (error) => window.alert(error.message)
            );
          });
        },
        (error) => window.alert(error.message)
      );
  }

  getErrorMessage() {
    if (!this.form.valid) {
      return 'Please enter the movie name you would like to search for';
    }
    return this.form.hasError('searchTerm') ? 'Not a valid search term' : '';
  }

  openYoutube(title: string) {
    window.open(
      `https://www.youtube.com/results?search_query=${title}`,
      '_blank'
    );
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
