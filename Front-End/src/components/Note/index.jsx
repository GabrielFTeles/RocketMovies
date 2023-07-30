import { Container } from './styles';

import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';

export function Note({ title, description, rating, tags, onClick }) {
  return (
    <Container>
      <button onClick={onClick}>
        <h2>{title}</h2>
        <Rating 
          rating={rating}
        />
        <p>
          {description}
        </p>
        <div>
          {
            tags.map((tag, index) => (
              <Tag
                key={String(index)}
                title={tag}
              />
            ))
          }
        </div>
      </button>
    </Container>
  )
}