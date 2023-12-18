import { FormSection, FormButton } from '../../../components/FormSplit'

import FormDefault from '../../../components/FormDefault'
import UpdateArea from '../../../components/UpdateArea'

const Payment = () => {

  const datesFloor = (
    <>
      
    </>
  )

  return (
    <FormDefault aboutArea="Pagamento">
      <FormSection label="Nome" placeH="Informe o nome"/>
      <FormButton button="Cadastrar"/>
      <UpdateArea dates={datesFloor}/>
    </FormDefault>
  )
}

export default Payment