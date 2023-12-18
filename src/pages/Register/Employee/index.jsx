import { FormSection, FormButton, FormSelect } from '../../../components/FormSplit'

import FormDefault from '../../../components/FormDefault'
import UpdateArea from '../../../components/UpdateArea'

const Employee = () => {

  const acessLevel = (
    <>
      <option value="" disabled selected>Selecione</option>
      <option value="">Administrador</option>
      <option value="">Comum</option>
    </>
  )

  const datesFloor = (
    <>
    
    </>
  )

  return (
    <FormDefault aboutArea="Funcionário">
      <FormSection label="Nome" placeH="Informe o nome"/>
      <FormSection label="CPF" placeH="000.000.000.00"/>
      <FormSection label="Salário" placeH="Informe o valor"/>
      <FormSection label="Email" placeH="Informe o e-mail"/>
      <FormSection label="Celular" placeH="Informe o celular"/>
      <FormSection label="Endereço" placeH="Informe o endereço"/>
      <FormSelect  label="Nível de acesso" items={acessLevel}/>
      <FormButton button="Cadastrar"/>

      <UpdateArea dates={datesFloor}/>
    </FormDefault>
  )
}

export default Employee