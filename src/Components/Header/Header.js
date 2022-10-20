import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../Features/movies/movieSlice";
import "./Header.scss";

const Header = () => {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    if (search === "") {
      return alert("Search term must be given");
    }
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncSeries(search));
    setsearch("");
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="serach-bar">
        <form onSubmit={submithandler}>
          <input
            type="text"
            value={search}
            placeholder="Enter your favourite movie or shows"
            onChange={(e) => setsearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
