import { FormSection, FormSelect, FormButton } from '../../../components/FormSplit'

import FormDefault from '../../../components/FormDefault'
import UpdateArea from '../../../components/UpdateArea'

const ToDo = () => {

  const guests = (
    <>
      <option value="" disabled selected>Selecione</option>
      <option value="">Carlos Henrique</option>
      <option value="">Rafael Gusmão</option>
    </>
  )

  const roomNumber = (
    <>
      <option value="" disabled selected>Selecione</option>
      <option value="">1</option>
      <option value="">2</option>
    </>
  )

  const datesToDo = (
    <>
      
    </>
  )

  return (
    <>
      <FormDefault aboutArea="Check-in">
        <FormSelect label="Nome do Hóspede" items={guests}/>
        <FormSelect label="Número do Quarto" items={roomNumber} />

        <FormSection label="CPF" placeH="000.000.000.00" canWrite/>
        <FormSection label="Email" placeH="Informe o e-mail" canWrite />
        <FormSection label="Celular" placeH="Informe um número" canWrite />
        <FormSection label="Endereço" placeH="Informe o endereço" canWrite />

        
        <FormButton button="Fazer check-in"/>
        
        <UpdateArea dates={datesToDo}/>
      </FormDefault>
    </>
  )
}

export default ToDo