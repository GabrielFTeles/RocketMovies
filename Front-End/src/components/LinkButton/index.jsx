import { Container } from './styles';

import { FiArrowLeft } from 'react-icons/fi'

export function LinkButton({ text, icon: Icon, route }) {
  return (
    <Container to={route}>
      {Icon && <Icon />}
      {text}
    </Container>
  )
}