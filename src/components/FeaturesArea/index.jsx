import CardResource from '../CardResource'

import { Container, InputArea, IconGlass, Separate } from './styles'

import { ImKey } from "react-icons/im";
import { FaBuilding, FaBed, FaMoneyCheckAlt } from "react-icons/fa";
import { FaClipboard, FaListCheck } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { VscCheckAll } from "react-icons/vsc";
import { FaCartPlus } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { HiUserAdd, HiUserGroup } from "react-icons/hi";

import ResourceTab from '../ResourceTab';

const FeaturesArea = () => {
  return (
    <Container>

      <InputArea>
        <span>Lorem ipsum</span>
        <input type="text" placeholder='Pesquise hóspedes...'/>
        <IconGlass/>
      </InputArea>

      {/*Register*/}
      <ResourceTab>
        <h2>Cadastro</h2>
        
        <div>
          <CardResource icon={<HiUserAdd/>} description="Hóspede" route="/register/guest"/>
          <CardResource icon={<FaMoneyCheckAlt/>} description="Pagamento" route="/register/payment"/>

          <CardResource icon={<GrUserWorker/>} description="Funcionário" route="/register/employee"/>
          <CardResource icon={<FaBuilding/>} description="Andar" route="/register/floor"/>       
          <CardResource icon={<FaBed/>} description="Tipo" route="/register/type"/>
          <CardResource icon={<ImKey/>} description="Quarto" route="/register/room"/>
        </div>
      </ResourceTab>

      <Separate/>

      {/*Check-in*/}
      <ResourceTab>
        <h2>Check-in</h2>
        
        <div>
          <CardResource icon={<FaClipboard/>} description="Fazer" route="/checkin/todo"/>          
          <CardResource icon={<VscCheckAll/>} description="Disponível" route="/checkin/available"/>
          <CardResource icon={<FaListCheck/>} description="Instruções" route="/checkin/instruction"/>
        </div>
      </ResourceTab>

      <Separate/>

      {/*Check-out*/}
      <ResourceTab>
        <h2>Check-out</h2>
        
        <div>
          <CardResource icon={<FaCartPlus/>} description="Fazer" route="/checkout/todo"/>          
        </div>
      </ResourceTab>

      <Separate/>

      {/*ESTOQUE/HISTORICOS*/}
      <ResourceTab>
        <h2>Consulta</h2>
        
        <div>
          <CardResource icon={<MdDateRange/>} description="Datas" route="/query/dates"/>
          <CardResource icon={<MdHistory/>} description="Histórico"
          route="/query/history"/>
        </div>
      </ResourceTab>
      
    </Container>
  )
}

export default FeaturesArea
