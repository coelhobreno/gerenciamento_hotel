import { FormSection, FormButton } from '../../../components/FormSplit'

import ResgisteredItem from '../../../components/RegisteredItem'
import FormDefault from '../../../components/FormDefault'
import UpdateArea from '../../../components/UpdateArea'

const Floor = () => {

  const datesFloor = (
    <>
      <ResgisteredItem date="Térreo"   />
      <ResgisteredItem date="1º Andar" />
      <ResgisteredItem date="2º Andar" />
      <ResgisteredItem date="3º Andar" />
      <ResgisteredItem date="2º Andar" />
      <ResgisteredItem date="4º Andar" />
    </>
  )

  return (
    <FormDefault aboutArea="Andar">
      <FormSection label="Nome" placeH="Informe o nome"/>
      <FormButton button="Cadastrar"/>
      <UpdateArea dates={datesFloor}/>
    </FormDefault>
  )
}

export default Floor