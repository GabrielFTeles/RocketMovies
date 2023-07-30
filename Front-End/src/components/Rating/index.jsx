import { Container } from './styles';

import { BsStarFill, BsStar } from 'react-icons/bs';

export function Rating({ rating }) {
  const ratingStars = [<BsStar />, <BsStar />, <BsStar />, <BsStar />, <BsStar />];

  for(let i = 0; i < rating; i++ ) {
    ratingStars[i] = <BsStarFill />;
  }

  return (
    <Container>
      {...ratingStars}
    </Container>
  )
}