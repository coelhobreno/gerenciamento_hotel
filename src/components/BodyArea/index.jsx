import { Container } from './styles'

import { Outlet } from 'react-router-dom'

const BodyArea = () => {
  return (
    <Container>
      <Outlet/>
    </Container>
  )
}

export default BodyArea