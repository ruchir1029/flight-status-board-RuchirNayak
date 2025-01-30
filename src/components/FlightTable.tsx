import React, { useEffect, useState } from 'react';
import  useFlights  from '../hooks/useFlights';
import { Link } from 'react-router-dom';
import Timer from './Timer';

const FlightTable: React.FC = () => {
  const { flights, loading, error } = useFlights();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Flight Status Board</h1>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>
                <Link to={`/flight/${flight.id}`}>{flight.flightNumber}</Link>
              </td>
              <td>{flight.airline}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Timer time={time} />
    </div>
  );
};

export default FlightTable;