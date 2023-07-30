import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useMovies } from '../../hooks/moviesContext';

import { Container, MoviesList } from './styles';
import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

export function Home() {
  const { movies, getMovies } = useMovies();

  const navigate = useNavigate();

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <div className="content">
          <div>
            <h2>Meus filmes</h2>

            <Link to="/new">
              <FiPlus />
              Adicionar filme
            </Link>
          </div>

          <MoviesList>
            {
              movies.map(movie => (
                <Note
                  key={String(movie.id)}
                  title={movie.title}
                  description={movie.description}
                  rating={movie.rating}
                  tags={movie.tags}
                  onClick={() => handlePreview(movie.id)}
                />
              ))
            }
          </MoviesList>
        </div>
      </main>
    </Container>
  )
}