import React from 'react';
import './MovieGrid.css';

const MoviePopup = ({ movie, onClose }) => {
  return (
    <div className="movie-popup-container">
      <div className="movie-popup-content">
        <div className="movie-popup-header">
          <h2 className="movie-title">{movie.title}</h2>
          <button className="close-popup" onClick={onClose}>
            Закрити
          </button>
        </div>
        <div className="movie-details">
          <div className="movie-cover-container">
            <img src={movie.posterUrl} alt={movie.title} className="movie-cover" />
          </div>
          <div className="movie-info">
            <p>
              <strong>Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Rating:</strong> {movie.rating}
            </p>
            <p>
              <strong>Actors:</strong> {movie.actors.join(', ')}
            </p>
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Description:</strong> {movie.description}
            </p>
            <p>
              <button
                className="trailer-button"
                onClick={() => window.open(`${movie.trailerUrl}`, "_blank")}
              >
                Переглянути трейлер
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;