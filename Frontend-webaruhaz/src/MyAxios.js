import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ApiContext = createContext('');

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [katLista, setKatLista] = useState([]);

  const getAdat = async (vegpont, callback) => {
    try {
      const response = await myAxios.get(vegpont);
      console.log(response.data); // Debugging line
      setTermekLista(response.data);
      callback([...response.data]);
    } catch (err) {
      console.error('Hiba történt', err);
    }
  };

  useEffect(() => {
    getAdat('/api/products', setTermekLista);
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista, katLista }}>
      {children}
    </ApiContext.Provider>
  );
};

export const myAxios = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
