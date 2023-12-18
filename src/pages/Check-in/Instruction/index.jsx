import { Container, Title, Topic, SubTitle, List, Item } from './styles'
 
const Instruction = () => {

  return (
    <Container>
      <Title>Regras e Orientações do Hotel</Title>

      <Topic>
        <SubTitle>Horário de Check-in e Check-out:</SubTitle>
        <List>
          <Item>O horário padrão de check-in é das 8h às 17h. O check-out é até as 12h sem acréscimo.</Item>
          <Item>Pedimos gentilmente que respeite estes horários para garantir uma transição tranquila entre hóspedes.</Item>
        </List>
      </Topic> 

      <Topic>
        <SubTitle>Política de Pagamento:</SubTitle>
        <List>
          <Item>O pagamento é devido no momento do check-in.</Item>
          <Item>Aceitamos os seguintes métodos de pagamento: dinheiro e débito e cartão de crédito</Item>
        </List>
      </Topic> 

      <Topic>
        <SubTitle>Política de Cancelamento:</SubTitle>
        <List>
          <Item>Cancelamentos devem ser feitos 5 dias antes da data de check-in para evitar taxas de cancelamento.</Item>
        </List>
      </Topic>

      <Topic>
        <SubTitle>Comportamento dos Hóspedes:</SubTitle>
        <List>
          <Item>Pedimos a todos os hóspedes que mantenham um comportamento respeitoso com outros hóspedes e funcionários.</Item>
          <Item>O uso de substâncias ilegais é estritamente proibido.</Item>
        </List>
      </Topic>

      <Topic>
        <SubTitle>Solicitações Especiais:</SubTitle>
        <List>
          <Item>Se tiver alguma necessidade especial, como alergias alimentares ou necessidades de acessibilidade, entre em contato com a recepção para assistência.</Item>
        </List>
      </Topic>

    </Container>
  )
}

export default Instruction