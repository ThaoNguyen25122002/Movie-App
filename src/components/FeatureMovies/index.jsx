import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTg0NWI5ODA4ZjE5YTMxMjcwNGRhYTI3YmE2Y2ZkZCIsIm5iZiI6MTcyOTQwNTcyNC4yNDEzMzcsInN1YiI6IjY3MTRhMjdhOTlmMjJmMzI2YWFkNWM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c46373CIr54amIBEtFRiAwZp9khbMFVzrN3_eg2qqEs
const FeatureMovie = () => {
  // const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popularMoviesResponse } = useFetch({ url: "/movie/popular" });
  const movies = popularMoviesResponse.results || [].slice(0, 4);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);
  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovie;
