import React from 'react'
import HotelCard from './HotelCard'

const ListHotels = ( {hotels} ) => {
  return (
    <div>
      {
        !hotels || hotels?.length === 0 
        ? ( <h2>No there hotels with this name</h2> )
        :(
        hotels?.map(hotel => (
          <HotelCard
          key={hotel.id}
          hotel={hotel}/>
        )))

      }
    </div>
  )
}

export default ListHotels