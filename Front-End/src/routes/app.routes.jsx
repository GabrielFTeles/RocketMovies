import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Preview } from '../pages/Preview';
import { Profile } from '../pages/Profile';
import { NotFound } from '../pages/404';

import { MoviesProvider } from '../hooks/moviesContext';

export function AppRoutes() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<New />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/preview/:id" element={<Preview />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </MoviesProvider>
  )
}