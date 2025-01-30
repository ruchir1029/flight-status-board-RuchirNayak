import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFlightDetail } from '../services/api';

const FlightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFlightDetail = async () => {
      try {
        const data = await getFlightDetail(id!);
        setFlight(data);
      } catch (err) {
        setError('Failed to fetch flight details');
      } finally {
        setLoading(false);
      }
    };

    fetchFlightDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Flight Details</h1>
      <p>Flight Number: {flight.flightNumber}</p>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {flight.departureTime}</p>
      <p>Status: {flight.status}</p>
    </div>
  );
};

export default FlightDetail;