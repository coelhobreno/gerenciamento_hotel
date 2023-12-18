import { Container, Filter, InputDate, ContItems, Header, Item } from './styles'

import { useContextValue } from '../../../context/ContextValue'

import BoxNotification from '../../../components/BoxNotification'

const History = () => {

  const { showNotification, setShowNotification } = useContextValue()

  return (
    <Container>
      <Filter>
        <InputDate>01/01/2021</InputDate>
        <InputDate>01/01/2022</InputDate>
      </Filter>

      <ContItems>
        <Header>
           <span>Check-in</span>
            <span>Hóspede</span>
            <span>Check-out</span>
        </Header>

        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>22/02/2021</span>
          <span>Renato Gusmão</span>
          <span>26/02/2021</span>
        </Item>

        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>27/03/2021</span>
          <span>Joana Santos</span>
          <span>30/03/2021</span>
        </Item>

        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>22/04/2021</span>
          <span>Eduardo Rocha</span>
          <span>30/04/2021</span>
        </Item>

        <Item>
          <span>23/05/2021</span>
          <span>João Silva</span>
          <span>28/05/2021</span>
        </Item>

        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>26/06/2021</span>
          <span>Joana Santos</span>
          <span>30/06/2021</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>22/07/2021</span>
          <span>Marcos Silva</span>
          <span>25/07/2021</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>07/08/2021</span>
          <span>Ana Oliveira</span>
          <span>12/08/2021</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>02/09/2021</span>
          <span>Pedro Souza</span>
          <span>08/09/2021</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>01/10/2021</span>
          <span>Carla Mendes</span>
          <span>05/10/2021</span>
        </Item>
        <Item onClick={() => setShowNotification(!showNotification)}>
          <span>25/11/2021</span>
          <span>Luisa Fernandes</span>
          <span>30/11/2021</span>
        </Item>
      </ContItems>
      
      <BoxNotification/>
    </Container>
  )
}

export default History
