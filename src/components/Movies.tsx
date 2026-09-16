import type { FilterState, IMovie } from "../types/type";
import MovieList from "./MovieList";

interface MoviesProps {
  movies: IMovie[];
  filter: FilterState;
  handleMovies: (movie: number) => void;
}

const Movies = ({ movies, filter, handleMovies }: MoviesProps) => {
  const filteredMovies = movies.filter((movie) => {
    if (filter === "watched") return movie.watched === true;
    if (filter === "remaining") return movie.watched !== true;
    return movie;
  });
  return (
    <section className="px-5">
      <div className="container mx-auto py-4 md:py-10">
        {filteredMovies.map((movie: IMovie) => (
          <MovieList
            key={movie.id}
            movie={movie}
            handleMovies={handleMovies}
          ></MovieList>
        ))}
      </div>
    </section>
  );
};

export default Movies;
