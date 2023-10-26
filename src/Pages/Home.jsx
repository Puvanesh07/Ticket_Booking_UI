import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Link } from "react-router-dom";

import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpg'

const moviesData = [
  {
    title: 'Jailer',
    description: 'A great movie for all ages.',
    image: image1, 
  },
  {
    title: 'Leo',
    description: 'An action-packed adventure.',
    image: image2, 
  },
  {
    title: 'Joker',
    description: 'A heartwarming story.',
    image: image3,
  },
  {
    title: 'Marvel',
    description: 'A heartwarming story.',
    image: image4, 
  },{
    title: 'IT chapter - 2',
    description: 'A heartwarming story.',
    image: image5, 
  },{
    title: 'Harry Poter',
    description: 'A heartwarming story.',
    image: image6, 
  },
];

function Home() {
  return (
    <Container style={{ backgroundColor: 'gray', color: 'white', minHeight: '100vh', minWidth: '90vw' }}>
      <Typography variant="h2" style={{ textAlign: 'center', margin: '20px 0' }}>
        Welcome to Movie Ticket Booking
      </Typography>
      <Grid container spacing={3}>
        {moviesData.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="400" 
                width="300"  
                image={movie.image}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.description}
                </Typography>
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'darkgreen', color: 'white' }}
                  component={Link}
                  to="/Login"
                  fullWidth
                  
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
