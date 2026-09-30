import { useState, useEffect } from 'react';
import axios from 'axios';
 
export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        // Rick & Morty devuelve los elementos en response.data.results
        setData(response.data.results || response.data);
      } catch (err) {
        setError(err.message || 'Error al cargar datos');
      } finally {
        setLoading(false);
      }
    };
 
    fetchData();
  }, [url]);
 
  return { data, loading, error };
};