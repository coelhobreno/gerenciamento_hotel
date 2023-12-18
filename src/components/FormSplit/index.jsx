import { Label, Input, Button, Select } from './styles'

export const FormSection = ({
  label,
  placeH,
  canWrite=false
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Input 
        placeholder={placeH}
        readOnly={canWrite ?? true}
        //Configs Input
      />
    </>
  )
}

export const FormButton = ({ button }) => {
  return (
    <Button>{button}</Button>
  )
}

export const FormSelect = ({ label, items }) => {
  return (
    <>
      <Label>{label}</Label>
      <Select>
        {items}
      </Select>
    </>
  )
}