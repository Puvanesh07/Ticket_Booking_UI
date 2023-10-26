import React from 'react';
import Button from '@mui/material/Button';

const MovieBooking = () => {
  const handleBookNowClick = async () => {
    // Make an API request to your backend to send the email
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include movie details, QR code, seat numbers, and number of seats
          movieDetails: 'Movie Title, Date, Time',
          qrCode: 'QR Code Data',
          seatNumbers: 'A1, A2, B1',
          numberOfSeats: 3,
          // Add user's email and other necessary info here
          userEmail: 'user@example.com',
        }),
      });

      if (response.ok) {
        // Email sent successfully
        alert('Booking successful. Check your email for details.');
      } else {
        // Handle errors if needed
        alert('Booking failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleBookNowClick}>
      Book Now
    </Button>
  );
};

export default MovieBooking;
