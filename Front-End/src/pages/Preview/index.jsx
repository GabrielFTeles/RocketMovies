import { Container, MovieInfos, MovieDescription, MadeBy, CreatedAt } from './styles';

import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';

import { FiClock, FiArrowLeft } from 'react-icons/fi';


export function Preview() {
  const [data, setData] = useState(null);
  
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);

      setData(response.data);
    }

    fetchMovie();
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
        <div className="content">
          <button onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </button>

          <MovieInfos>
            <div>
              <h2>{data.title}</h2>
              <Rating
                rating={data.rating}
              />
            </div>

            <div>
              <MadeBy>
                <img 
                  src={
                    data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder
                  }
                  alt="Foto do usuário"
                />
                <span>Por {data.author.name}</span>
              </MadeBy>

              <CreatedAt>
                <FiClock />
                <span>
                  { dayjs(data.created_at).format('DD/MM/YY [às] HH:mm') }
                </span>
              </CreatedAt>
            </div>

            <div>
              {
                data.tags.map((name, index) => (
                  <Tag key={index} title={name}/>
                ))
              }
            </div>
          </MovieInfos>

          <MovieDescription>
            <p>
              {data.description}
            </p>
          </MovieDescription>
        </div>
      </main>
      }
    </Container>
  )
}