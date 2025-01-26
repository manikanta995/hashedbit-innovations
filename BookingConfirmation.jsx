import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const { name, email, mobile } = location.state || {};

  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className="confirmation">
      <h2>Your Seat has been Booked!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
