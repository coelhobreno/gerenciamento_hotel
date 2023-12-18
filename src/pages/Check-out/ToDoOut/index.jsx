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

  const datesToDoOut = (
    <>
      
    </>
  )

  return (
    <>
      <FormDefault aboutArea="Check-out">
        <FormSelect label="Nome do Hóspede" items={guests}/>

        <FormSection label="CPF" placeH="" canWrite/>

        <FormSection label="Quarto" placeH="" canWrite/>

        <FormSection label="Data check-in" placeH="" canWrite/>

        <FormSection label="Data check-out" placeH="" canWrite/>

        <FormSection label="Total consumo" placeH="" canWrite/>

        <FormSection label="Total consumo" placeH="" canWrite/>

        <FormSection label="Total à pagar" placeH="" canWrite/>

        <FormSection label="Forma de pagamento" placeH="" canWrite/>
        
        <FormButton button="Fazer check-out"/>

        <UpdateArea dates={datesToDoOut}/>
      </FormDefault>
    </>
  )
}

export default ToDo