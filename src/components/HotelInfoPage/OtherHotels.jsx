import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({cityId, hotelId}) => {

  const url = `https://hotels-api.academlo.tech/hotels?cityId=${cityId}`
  const [hotels, getHotels] = useFetch(url)

  useEffect(() => {
    if(cityId){
   getHotels()
    }
  }, [cityId])
  
console.log(cityId)
  return (
    <div>
      <h2>Other Hotels in {hotels?.results[0].city.name}</h2>
      <div>
        {
          hotels?.results.filter(hotelInfo => hotelInfo.id !== hotelId ).map( hotelInfo =>(
            <HotelCard
            hotel={hotelInfo}
            key={hotelInfo.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default OtherHotels