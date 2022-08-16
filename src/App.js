import React, { Component } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

// my api link
const API_URL = "http://www.omdbapi.com?apikey=8ac6d8a9";

//the movie object
const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};

const App = () => {
  //search movies function
  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();

    console.log(data.Search);
  };

  //fetch movies ffrom the database
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      {/* search tab */}
      <div className="search">
        <input
          placeholder="Search for a movie.."
          value="Spiderman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container"></div>
    </div>
  );
};

export default App;
