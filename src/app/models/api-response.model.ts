import { Movie } from './movie.model';

export class APIResponse {
  Search: Movie[] =  new Array<Movie>();
  totalResults: number = 100;
  Response: string | undefined;
  Error?: string | undefined;
}
