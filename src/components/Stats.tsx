import type { IMovie } from "../types/type";

interface StatsProps {
  movies: IMovie[];
}

const Stats = ({ movies }: StatsProps) => {
  const totalMovies: number = movies.length;
  const watchedMovies: number = movies.filter((movie) => movie.watched).length;
  return (
    <section className="px-5">
      <div className="container mx-auto mt-8 md:mt-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-black">
            {totalMovies} films, <br /> one list.
          </h1>
          <p className="text-base md:text-lg text-left mt-5">
            Mark what you have seen, keep what you have not, and{" "}
            <br className="hidden md:block" /> count the ones worth returning
            to.
          </p>
        </div>
        <div className="my-5 md:my-7 border-y-1 md:border-y-2 border-gray-500 grid grid-cols-3 items-center justify-between">
          <div className="p-3 md:p-7">
            <p className="text-sm md:text-base text-gray-700 font-bold">
              Total
            </p>
            <h4 className="text-3xl md:text-5xl font-black mt-2">
              {totalMovies}
            </h4>
          </div>
          <div className="p-3 md:p-7 border-l-1 md:border-l-2 border-gray-500">
            <p className="text-sm md:text-base text-gray-700 font-bold">
              Watched
            </p>
            <h4 className="text-3xl md:text-5xl font-black mt-2 text-red-600">
              {watchedMovies}
            </h4>
          </div>
          <div className="p-3 md:p-7 border-l-1 md:border-l-2 border-gray-500">
            <p className="text-sm md:text-base text-gray-700 font-bold">
              Remaining
            </p>
            <h4 className="text-3xl md:text-5xl font-black mt-2">
              {totalMovies - watchedMovies}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
