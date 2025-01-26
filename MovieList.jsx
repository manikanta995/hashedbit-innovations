import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { title: 'Sky Force', image: 'src/assets/images/movie1.jpg' },
  { title: 'Emergency', image: 'src/assets/images/movie2.jpg' },
  { title: 'Pushpa 2', image: 'src/assets/images/movie3.jpg' },
  { title: 'Harry Potter', image: 'src/assets/images/movie4.jpg' },
  { title: 'Ramayana', image: 'src/assets/images/movie5.jpg' },
  { title: 'Fateh', image: 'src/assets/images/movie6.jpg' },
  { title: 'Flight Risk', image: 'src/assets/images/movie7.jpg' },
  { title: 'Mufasa', image: 'src/assets/images/movie8.jpg' },
];

const MovieList = () => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.image} alt={movie.title} />
          <div className="movie-title">{movie.title}</div>
          <Link to="/movie-details">
            <button className="book-btn">Book Seat</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
