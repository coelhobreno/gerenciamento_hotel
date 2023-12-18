import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { ContextValueProvider } from "../../context/ContextValue"

import { Grid } from "./styles"

import LogoArea from "../LogoArea"
import InfoCompany from "../InfoCompany"
import MainFeatures from "../MainFeatures"
import FeaturesArea from "../FeaturesArea"
import BodyArea from "../BodyArea"

import Dashboard from "../Dashboard"
import Guest from "../../pages/Register/Guest"
import Payment from "../../pages/Register/Payment"
import Employee from "../../pages/Register/Employee"
import TypeRoom from "../../pages/Register/TypeRoom"
import Floor from "../../pages/Register/Floor"
import Room from "../../pages/Register/Room"

import ToDo from "../../pages/Check-in/ToDo"
import Available from "../../pages/Check-in/Available"
import Instruction from "../../pages/Check-in/Instruction"
import ToDoOut from "../../pages/Check-out/ToDoOut"
import Dates from "../../pages/Query/Dates"
import History from "../../pages/Query/History"

const Layout = () => {
  return (
    <ContextValueProvider>
      <Grid>

        <BrowserRouter>

          <LogoArea/>
          <InfoCompany/>
          <MainFeatures/>
          <FeaturesArea/>
          
          <Routes>
            <Route element={<BodyArea/>}>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/register" element={<Navigate to="/register/guest"/>}/>
              <Route path="/checkin" element={<Navigate to="/checkin/todo"/>}/>
              <Route path="/checkout" element={<Navigate to="/checkout/todo"/>}/>
              <Route path="/query" element={<Navigate to="/query/dates"/>}/>

              <Route path="/register/guest" element={<Guest/>} />
              <Route path="/register/payment" element={<Payment/>} />
              <Route path="/register/employee" element={<Employee/>} />
              <Route path="/register/type" element={<TypeRoom/>} />
              <Route path="/register/floor" element={<Floor/>} />
              <Route path="/register/room" element={<Room/>} />

              <Route path="/checkin/todo" element={<ToDo/>} />
              <Route path="/checkin/available" element={<Available/>} />
              <Route path="/checkin/instruction" element={<Instruction/>} />
              
              <Route path="/checkout/todo" element={<ToDoOut/>} />

              <Route path="/query/dates" element={<Dates/>} />
              <Route path="/query/history" element={<History/>} />
            </Route>
          </Routes>

        </BrowserRouter>
        
      </Grid>
    </ContextValueProvider>
  )
}

export default Layout
