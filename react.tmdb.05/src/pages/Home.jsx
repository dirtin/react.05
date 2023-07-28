import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = 'pt-BR';

const Home = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const getFavoriteMovies = async () => {
    const moviePromises = favoriteMovieIds.map(async (id) => {
      const url = `${moviesURL}${id}?${apiKey}&language=${language}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    });

    const favoriteMoviesData = await Promise.all(moviePromises);
    setFavoriteMovies(favoriteMoviesData);
  };

  useEffect(() => {
    // Replace `favoriteMovieIds` with an array containing your favorite movie IDs
    const favoriteMovieIds = [123, 456, 789];
    getFavoriteMovies(favoriteMovieIds);
  }, []);

  console.log(favoriteMovies);

  return (
    <div className="container">
      <h2 className="title">Meus filmes favoritos</h2>
      <div className="movies-container">
        {favoriteMovies.length > 0 &&
          favoriteMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
