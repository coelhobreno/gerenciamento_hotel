import { Container, AcessInfo, LogoutArea, IconNotification, IconLogout } from './styles'

const InfoCompany = () => {
  return (
    <Container>
      <AcessInfo>
        <h2>Hotel Website</h2>
        <span>Lorem ipsum, dolor</span>
      </AcessInfo>

      <LogoutArea>
        <IconNotification/>
        <IconLogout/>
      </LogoutArea>
    </Container>
  )
}

export default InfoCompany