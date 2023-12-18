import { FormSection, FormButton, FormSelect } from '../../../components/FormSplit'

import FormDefault from '../../../components/FormDefault'
import UpdateArea from '../../../components/UpdateArea'

const Room = () => {

  const itemsFloor = (
    <>
      <option value="" disabled selected>Selecione</option>
      <option value="">Térreo</option>
      <option value="">1° Andar</option>
      <option value="">2° Andar</option>
    </>
  )

  const itemsTypeR = (
    <>
      <option value="" disabled selected>Selecione</option>
      <option value="">Familiar</option>
      <option value="">Individual</option>
    </>
  )

  const datesRoom = (
    <>
      
    </>
  )

  return (
    <>
      <FormDefault aboutArea="Quarto">

        <FormSelect label="Andar" items={itemsFloor} />

        <FormSelect label="Tipo de Quarto" items={itemsTypeR} />

        <FormSection label="Número" placeH="Informe o número"/>

        <FormButton button="Cadastrar"/>

        <UpdateArea dates={datesRoom}/>
      </FormDefault>
    </>
  )
}

export default Room