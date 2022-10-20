import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../Features/movies/movieSlice";
import MovieCards from "../MovieCards/MovieCards";
import "./MovieListing.scss";

const MovieLising = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  // console.log("moviessssssss", movies);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCards key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    series.Response === "True" ? (
      series.Search.map((movie, index) => (
        <MovieCards key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">{renderShows}</div>
        </div>
      </div>
    </>
  );
};

export default MovieLising;
