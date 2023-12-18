import { useState } from 'react'

import { HeaderUpdate, IconShow, AllItems, Header } from './styles'

import BoxNotification from '../BoxNotification'

const UpdateArea = ({
  dates
}) => {

  const [selected, setSelected] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <>
      <HeaderUpdate 
        onClick={() => setSelected(!selected)}
        className={selected ? 'active' : '' }
      >
        <IconShow/>
        <span>Modificar</span>
      </HeaderUpdate>

      <AllItems className={selected ? 'show' : '' }>
        <Header>
          <span>Nome</span>
          <span>Ações</span>
        </Header>

        {/*Dados Fromulaário*/}
        {dates}
      </AllItems>

      <BoxNotification show={show} setShow={setShow}/>
    </>
  )
}

export default UpdateArea