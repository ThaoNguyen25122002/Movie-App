import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTg0NWI5ODA4ZjE5YTMxMjcwNGRhYTI3YmE2Y2ZkZCIsIm5iZiI6MTcyOTQwNTcyNC4yNDEzMzcsInN1YiI6IjY3MTRhMjdhOTlmMjJmMzI2YWFkNWM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c46373CIr54amIBEtFRiAwZp9khbMFVzrN3_eg2qqEs
const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTg0NWI5ODA4ZjE5YTMxMjcwNGRhYTI3YmE2Y2ZkZCIsIm5iZiI6MTcyOTQwNTcyNC4yNDEzMzcsInN1YiI6IjY3MTRhMjdhOTlmMjJmMzI2YWFkNWM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c46373CIr54amIBEtFRiAwZp9khbMFVzrN3_eg2qqEs`,
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
      // console.log(data.results);
    });
  }, []);
  // console.log(movies);

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
