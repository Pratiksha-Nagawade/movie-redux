import React, { useEffect } from "react";
import MovieLising from "../MovieListing/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../Features/movies/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(seriesText));
  }, [dispatch]);

  return (
    <>
      <div>
        <MovieLising />
      </div>
    </>
  );
};

export default Home;
