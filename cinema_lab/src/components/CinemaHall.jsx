import React, { useState } from 'react';
import '../css/CinemaHall.css';

function CinemaHall() {
    const rows = 8;
    const seatsPerRow = 10;
    const lastRowSeats = 14; // Останній ряд має 14 місць
    const [selectedSeats, setSelectedSeats] = useState([]);
  
    const toggleSeat = (row, seat) => {
      const seatId = `${row}-${seat}`;
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats(selectedSeats.filter(id => id !== seatId));
      } else {
        setSelectedSeats([...selectedSeats, seatId]);
      }
    };
  
    const renderSeats = () => {
      const seats = [];
      for (let row = 1; row <= rows; row++) {
        const isLastRow = row === rows;
        const seatsInThisRow = isLastRow ? lastRowSeats : seatsPerRow;
        const rowSeats = [];
        const startSeat = isLastRow ? 1 : 1;
        const endSeat = isLastRow ? 14 : seatsPerRow;
        for (let seat = startSeat; seat <= endSeat; seat++) {
          const seatId = `${row}-${seat}`;
          const isSelected = selectedSeats.includes(seatId);
          rowSeats.push(
            <div
              key={seatId}
              className={`seat ${isSelected ? 'selected' : 'available'}`}
              onClick={() => toggleSeat(row, seat)}
            >
              {seat}
            </div>
          );
        }
        seats.push(
          <div key={row} className="seat-row">
            Ряд {row}: {rowSeats}
          </div>
        );
      }
      return seats;
    };
  
    return (
      <div className="cinema-hall">
        <h2>Вибір місць</h2>
        <div className="seats-grid">{renderSeats()}</div>
        <div className="selected-seats">
          <h3>Вибрані місця:</h3>
          {selectedSeats.length > 0 ? (
            <ul>
              {selectedSeats.map(seat => (
                <li key={seat}>Ряд {seat.split('-')[0]}, Місце {seat.split('-')[1]}</li>
              ))}
            </ul>
          ) : (
            <p>Місця не вибрано</p>
          )}
        </div>
      </div>
    );
  }
  
  export default CinemaHall;