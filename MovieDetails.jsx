import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div className="movie-details">
      <h1>Movie Title</h1>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Showtimes: 10:00 AM, 2:00 PM, 6:00 PM, 9:00 PM</p>
      <Link to="/book-seat">
        <button className="book-btn">Book Seat</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
