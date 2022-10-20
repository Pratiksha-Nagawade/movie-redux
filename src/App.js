import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDeatils/MovieDetails";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route element={PageNotFound} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
