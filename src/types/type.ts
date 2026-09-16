export type FilterState = "all" | "watched" | "remaining";

export interface IMovie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  watched: boolean;
}
export interface IMoviePromise {
  movieListPromise: Promise<IMovie[]>;
}
