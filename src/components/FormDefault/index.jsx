import { Container, Title } from './styles'

const FormDefault = ({ 
  aboutArea,
  children
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>{aboutArea}</Title>

      {children}
    </Container>
  )
}

export default FormDefault