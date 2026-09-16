import { Suspense, useState } from "react";
import Header from "./components/Header";
import MovieApp from "./components/MovieApp";
import type { FilterState, IMovie } from "./types/type";

const fetchMovies = async (): Promise<IMovie[]> => {
  const response = await fetch("./data.json");
  const data: IMovie[] = await response.json();
  return data;
};

const App = () => {
  const [movieListPromise] = useState(fetchMovies);
  const [filter, setFilter] = useState<FilterState>("all");

  return (
    <>
      <Header></Header>
      <Suspense fallback="<p>Loading...</p>">
        <MovieApp
          onChange={setFilter}
          filter={filter}
          movieListPromise={movieListPromise}
        ></MovieApp>
      </Suspense>
    </>
  );
};

export default App;
