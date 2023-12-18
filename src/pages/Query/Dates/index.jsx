import { Container, Filter, InputDate, ContItems, Header, Item } from './styles'

import { useContextValue } from '../../../context/ContextValue'

import BoxNotification from '../../../components/BoxNotification'

const Dates = () => {

  const { showNotification, setShowNotification } = useContextValue()

  return (
    <Container>
      <Filter>
        <InputDate>25/11/2023</InputDate>
        <InputDate>17/12/2023</InputDate>
      </Filter>

      <ContItems>
        <Header>
          <span>Check-in</span>
          <span>Hóspede</span>
          <span>Check-out</span>
        </Header>

        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>05/12/2023</span>
          <span>Rafaela Pereira</span>
          <span>17/12/2023</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>07/12/2023</span>
          <span>Fernando Oliveira</span>
          <span>17/12/2023</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>07/12/2023</span>
          <span>Mariana Castro</span>
          <span>17/12/2023</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>08/12/2023</span>
          <span>Gustavo Rodrigues</span>
          <span>17/12/2023</span>
        </Item>
      </ContItems>
      
      <BoxNotification/>
    </Container>
  )
}

export default Dates 