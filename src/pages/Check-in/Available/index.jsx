import { Container, UpDownArea, ShowRoomsArea, Room, IconUp, CurrentFloor, IconDown } from './styles'

import { useContextValue } from '../../../context/ContextValue'

import { useState } from 'react'
import BoxNotification from '../../../components/BoxNotification'

const Available = () => {

  const rooms = [
    {
      floor: "1° Andar", 
      rooms: [
        {number:"1", isOccupied: false}, 
        {number:"2", isOccupied: true}, 
        {number:"3", isOccupied: false}, 
        {number:"4", isOccupied: true}, 
        {number:"5", isOccupied: false}, 
        {number:"6", isOccupied: true}, 
        {number:"7", isOccupied: false}]
    },
    {
      floor: "2° Andar", 
      rooms: [
        {number:"8", isOccupied: true}, 
        {number:"9", isOccupied: false}, 
        {number:"10", isOccupied: true}, 
        {number:"11", isOccupied: true}, 
        {number:"12", isOccupied: false}, 
        {number:"13", isOccupied: true}, 
        {number:"14", isOccupied: true}]
    },
    {
      floor: "3° Andar", 
      rooms: [
        {number:"15", isOccupied: true}, 
        {number:"16", isOccupied: false}, 
        {number:"17", isOccupied: true}, 
        {number:"18", isOccupied: false}, 
        {number:"19", isOccupied: true}, 
        {number:"20", isOccupied: true}, 
        {number:"21", isOccupied: false}]
    },
    {
      floor: "4° Andar", 
      rooms: [
        {number:"22", isOccupied: true}, 
        {number:"23", isOccupied: true}, 
        {number:"24", isOccupied: true}, 
        {number:"25", isOccupied: true}, 
        {number:"26", isOccupied: true}, 
        {number:"27", isOccupied: false}, 
        {number:"28", isOccupied: true}]
    }
  ]

  const {showNotification, setShowNotification} = useContextValue()
  
  const [indexFloor, setIndexFloor] = useState(0)
  const [currentFloor, setCurrentFloor] = useState(rooms ? rooms[0] : null)


  const modifiedFloor = (action) => {
    let newIndex = indexFloor

    switch(action){
      case "up":
        newIndex += 1;
        break;
      case "down":
        newIndex -= 1;
        break;
      default:
        break;
    }

    if(newIndex >= 0 && newIndex < rooms.length){
      setIndexFloor(newIndex)
      setCurrentFloor(rooms[newIndex])
    }
  }

  return (
    <Container>
      <UpDownArea>
        <IconUp onClick={() => modifiedFloor('up')} />
        <CurrentFloor>
          <span>{currentFloor.floor}</span>
        </CurrentFloor>
        <IconDown onClick={() => modifiedFloor('down')} />
      </UpDownArea>

      <ShowRoomsArea>
        {currentFloor.rooms.map((room, index) => (
          <Room 
            key={index} 
            className={room.isOccupied ? 'occupied' : ''}
            onClick={() => setShowNotification(!showNotification)}
          >
              {room.number}
          </Room>
        ))}
      </ShowRoomsArea>

      {showNotification && <BoxNotification/>}
    </Container>
  )
}

export default Available