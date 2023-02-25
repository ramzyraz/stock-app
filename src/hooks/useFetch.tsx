import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (urlToFetchData: string) => {
  const [data, setData] = useState<any | null>();
  const apiKey: string = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: urlToFetchData,
          headers: {
              'x-api-key': apiKey
          }
        };

        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [urlToFetchData]);

  return { data };
}