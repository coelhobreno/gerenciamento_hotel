import { Container } from './styles'

const CardResource = ({
  route,
  icon,
  description
}) => {
  return (
    <Container to={route}>
      {icon}
      <span>{description}</span>
    </Container>
  )
}

export default CardResource