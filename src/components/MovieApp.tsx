import { use, useState } from "react";
import type { FilterState, IMovie, IMoviePromise } from "../types/type";
import FilterButtons from "./FilterButtons";
import Footer from "./Footer";
import Movies from "./Movies";
import Stats from "./Stats";

interface MovieAppsProps extends IMoviePromise {
  filter: FilterState;
  onChange: (filter: FilterState) => void;
}

const MovieApp = ({ movieListPromise, filter, onChange }: MovieAppsProps) => {
  const fetchedMovies: IMovie[] = use(movieListPromise);
  const [movies, setMovies] = useState<IMovie[]>(fetchedMovies);

  const handleMovies = (id: number): void => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie,
    );
    setMovies(updatedMovies);
  };
  return (
    <>
      <Stats movies={movies}></Stats>
      <FilterButtons filter={filter} onChange={onChange}></FilterButtons>
      <Movies
        filter={filter}
        movies={movies}
        handleMovies={handleMovies}
      ></Movies>
      <Footer onChange={setMovies} movies={movies}></Footer>
    </>
  );
};

export default MovieApp;
