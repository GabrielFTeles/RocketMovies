import { Container } from './styles'

export function Button({ title, icon: Icon, isLoading = false, ...rest}) {
  return (
    <Container
      type="button"
      disabled={isLoading}
      {...rest}
    >
      { Icon && <Icon />}
      { isLoading ? 'Carregando...' : title }
    </Container>
  )
}