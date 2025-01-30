import axios from 'axios';

const API_BASE_URL = 'https://flight-status-mock.core.travelopia.cloud';

export const getFlights = async () => {
  const response = await axios.get(`${API_BASE_URL}/flights`);
  return response.data;
};

export const getFlightDetail = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/flights/${id}`);
  return response.data;
};