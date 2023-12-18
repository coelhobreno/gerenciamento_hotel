import { FormSection, FormButton } from '../../../components/FormSplit'

import ResgisteredItem from '../../../components/RegisteredItem'
import FormDefault from '../../../components/FormDefault'
import UpdateArea from '../../../components/UpdateArea'

const TypeRoom = () => {

  const datesFloor = (
    <>
      <ResgisteredItem date="Térreo"   />
      <ResgisteredItem date="1º Andar" />
      <ResgisteredItem date="2º Andar" />
    </>
  )

  return (
    <>
      <FormDefault aboutArea="Tipo de Quarto">
        <FormSection label="Nome" placeH="Informe o nome"/>
        <FormButton button="Cadastrar"/>
        <UpdateArea dates={datesFloor}/>
      </FormDefault>
    </>
  )
}

export default TypeRoom