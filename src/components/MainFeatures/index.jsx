import { Container, Functionalities } from './styles'

import { RiMapPin2Fill, RiSettingsFill } from "react-icons/ri";
import { PiPlusBold } from "react-icons/pi";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { PiListMagnifyingGlassDuotone } from "react-icons/pi";

import LinkFeatures from '../LinkFeatures'

const MainFeatures = () => {
  return (
    <Container>
      <Functionalities>
        
        <LinkFeatures icon={<PiPlusBold/>} route="/register"/>
        <LinkFeatures icon={<RiMapPin2Fill/>} route="/checkin"/>
        <LinkFeatures icon={<FaCartFlatbedSuitcase/>} route="/checkout"/>
        <LinkFeatures icon={<PiListMagnifyingGlassDuotone/>} route="/query"/>

      </Functionalities>

      <LinkFeatures icon={<RiSettingsFill/>} route="/setting"/>
    </Container>
  )
}

export default MainFeatures