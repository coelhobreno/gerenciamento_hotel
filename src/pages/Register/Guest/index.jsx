import { FormSection, FormButton } from '../../../components/FormSplit'

import FormDefault from '../../../components/FormDefault'
import UpdateArea from '../../../components/UpdateArea'

const Guest = () => {

  const datesFloor = (
      <>
      
      </>
    )

  return (
    <>
      <FormDefault aboutArea="Hóspede">
        <FormSection label="Nome" placeH="Informe o nome"/>
        <FormSection label="CPF" placeH="000.000.000.00"/>
        <FormSection label="Email" placeH="Informe o e-mail"/>
        <FormSection label="Celular" placeH="Informe um número"/>
        <FormSection label="Endereço" placeH="Informe o endereço"/>
        <FormButton button="Cadastrar"/>

        <UpdateArea dates={datesFloor}/>
      </FormDefault>
    </>
  )
}

export default Guest