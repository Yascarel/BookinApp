import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from "pigeon-maps"
import OtherHotel from '../components/HotelInfoPage/OtherHotels'
import ReservationsHotel from '../components/HotelInfoPage/ReservationsHotel'

const HotelInfoPage = () => {

  const { id } = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
    
  }, [id])
  
  return (
    <div>
      <header>
      <h2>{hotel?.name}</h2>
      <span>Rating</span>
      </header>
      <div>
        <img src={hotel?.images[0].url} alt="" />
      </div>
      <div>
        {
          hotel && (
      <Map  defaultCenter={[ Number(hotel.lat), +hotel.lon]}  height={300} zoom={11}>
        <Marker width={50} anchor={[Number(hotel.lat), +hotel.lon]} />
        <ZoomControl/>
    </Map>
          )  
      }
      </div>
      <div>
        <div>
          <span>{hotel?.city.name}</span>
          <span>{hotel?.city.country}</span>
        </div>
        <p>
        <i className='bx bx-map'></i>
          <span>{hotel?.address}</span>
        </p>
      </div>
      <div>
        <p>{hotel?.description}</p>
      </div>
      <ReservationsHotel/>
     <OtherHotel  cityId={hotel?.city.id}
     hotelId={hotel?.id}/>
    </div>
  )
}

export default HotelInfoPage