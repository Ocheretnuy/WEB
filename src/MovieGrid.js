import React, { useState, useMemo } from 'react';
import MoviePopup from './MoviePopup';
import './MovieGrid.css';

const MovieGrid = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const openMoviePopup = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMoviePopup = () => {
    setSelectedMovie(null);
  };

  const filterMovies = (movies, searchQuery) => {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.actors.some((actor) => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const sortedMovies = useMemo(() => {
    const filteredMovies = filterMovies(movies, searchQuery);

    return filteredMovies.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'year') {
        return a.year - b.year;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
    });
  }, [movies, searchQuery, sortBy]);

  const limitedMovies = sortedMovies.slice(0, 15);


  return (
    <div className="movie-grid">
     {limitedMovies.map((movie) => (
        <div key={movie.id} className="movie-grid-item">
          <div className="movie-poster-wrapper">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              onClick={() => openMoviePopup(movie)}
              className="movie-poster"
            />
          </div>
        </div>
      ))}

      {selectedMovie && (
        <MoviePopup movie={selectedMovie} onClose={closeMoviePopup} />
      )}
    </div>
  );
};

export default MovieGrid;
