import type { IMovie } from "../types/type";

interface MovieProps {
  movie: IMovie;
  handleMovies: (movie: number) => void;
}

const MovieList = ({ movie, handleMovies }: MovieProps) => {
  return (
    <figure className="border-t-1 md:border-t-2 border-gray-500 py-2 md:py-4.5 grid grid-cols-12 items-start justify-between">
      <div className="text-xs md:text-sm font-bold text-gray-400 col-span-1">
        {movie.id}
      </div>
      <div className="col-span-6 md:col-span-7">
        <h3 className="text-lg md:text-2xl font-bold">{movie.title}</h3>
        <p className="text-sm text-black font-light uppercase mt-1 md:mt-2 md:text-base">
          {movie.genre} - {movie.year} - ⭐{movie.rating}
        </p>
      </div>
      <div className="col-span-4 md:col-span-3 col-end-13 self-center">
        <button
          className={`text-xs md:text-sm font-bold text-center w-full border border-black py-1.5 md:py-2.5 px-3 md:px-5 cursor-pointer hover:bg-gray-100 hover:border-gray-200 transition-all ${movie.watched && "bg-red-500 text-white border-red-500 hover:bg-red-400 hover:border-red-400"}`}
          onClick={() => handleMovies(movie.id)}
        >
          {movie.watched ? "Mark unseen" : "Mark watched"}
        </button>
      </div>
    </figure>
  );
};

export default MovieList;
