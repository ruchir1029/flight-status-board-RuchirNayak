import { useEffect, useState } from 'react';
import { getFlights } from '../services/api';

const useFlights = () => {
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchFlights = async () => {
    try {
      const data = await getFlights();
      setFlights(data);
    } catch (err) {
      setError('Failed to fetch flights');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
    const interval = setInterval(fetchFlights, 10000);
    return () => clearInterval(interval);
  }, []);

  return { flights, loading, error };
};

export default useFlights;