import { Container, Notification, IconClose } from './styles'

import { useContextValue } from '../../context/ContextValue'

const BoxNotification = () => {

  const { showNotification,  setShowNotification } = useContextValue()
 
  return (
    <Container 
      className={showNotification ? 'show' :  ''}
    >
      <Notification>
        <IconClose 
          onClick={() => setShowNotification(!showNotification)}
        />
      </Notification>
    </Container>
  )
}

export default BoxNotification