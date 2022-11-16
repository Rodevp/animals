import { fetchPetsInfo } from '../services';
import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [animalsData, setAnimalsData] = useState([]);

  async function getPuppiesData(APIendpoint) {
    const apiResponse = await fetchPetsInfo(APIendpoint);
    setAnimalsData(apiResponse);
  }

  useEffect(() => {
    getPuppiesData(url);
  }, []);

  return { animalsData };
}
