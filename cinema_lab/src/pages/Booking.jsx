import React from 'react';
import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import moviesData from '../data/movies';
import '../css/CinemaHall.css';

function Booking() {
    const { id } = useParams();
    const movie = moviesData.find(movie => movie.id === parseInt(id));
  
    if (!movie) {
      return <div>Фільм не знайдено</div>;
    }
  
    return (
      <div className="booking">
        <h2>{movie.title}</h2>
        <div className="screen">Екран</div>
        <CinemaHall />
      </div>
    );
  }
  
  export default Booking;