import { Container, Profile } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import debounce from 'lodash.debounce';

import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/moviesContext';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../../components/Input';

export function Header() {
  const { signOut, user } = useAuth();
  const { getMovies } = useMovies();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const isAtHome = window.location.pathname === '/';

  const debounceSearch = debounce((searchText) => {
    getMovies(searchText);
  }, 300);

  function handleSearch(searchText) {
    debounceSearch(searchText);
  }

  return (
    <Container>
      <div className="content">
        <h1>RocketMovies</h1>

        {
          isAtHome &&
          <Input 
            placeholder="Pesquisar pelo título"
            onChange={e => handleSearch(e.target.value)}
          />
        }

        <Profile>
          <div>
            <Link to="/profile">{user.name}</Link>
            <button onClick={signOut}>sair</button>
          </div>

          <Link to="/profile">
            <img 
              src={avatarURL}
              alt="Foto do usuário"
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}