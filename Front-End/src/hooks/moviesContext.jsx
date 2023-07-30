import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

export const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  async function getMovies(title = "") {
    const response = await api.get(`/notes?title=${title}`);
    setMovies(response.data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        getMovies,
        movies,
      }}
    >
      { children }
    </MoviesContext.Provider>
  )
}

function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}

export { MoviesProvider, useMovies };