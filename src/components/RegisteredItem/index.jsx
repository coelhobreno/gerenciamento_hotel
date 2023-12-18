import { useContextValue } from '../../context/ContextValue'
import { Container, ButtonEdit, IconEdit, ButtonDelete, IconDelete } from './styles'

const ResgisteredItem = ({ date }) => {

  const { showNotification, setShowNotification } = useContextValue()

  return (
    <Container>
      <span>{date}</span>
      <div>
        <ButtonEdit onClick={() => setShowNotification(!showNotification)}><IconEdit/></ButtonEdit>
        <ButtonDelete><IconDelete/></ButtonDelete>
      </div>
    </Container>
  )
}

export default ResgisteredItem