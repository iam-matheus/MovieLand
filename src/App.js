import React, { Component, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

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
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //search movies function
  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();

    setMovies(data.Search);
  };

  //fetch movies ffrom the database
  useEffect(() => {
    searchMovies("ironman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      {/* search movies */}
      <div className="search">
        <input
          placeholder="Search for a movie.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Sorry, we found no movies.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
