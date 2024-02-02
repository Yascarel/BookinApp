import React from 'react'
import { useNavigate } from 'react-router-dom'

const HotelCard = ({hotel}) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
   navigate(`/hotel/${hotel.id}`)
  }

  return (
    <article> 
     <header>
      <img src={hotel.images[0].url} alt="" />
      <section>
      <h2>{hotel.name}</h2>
      <span>Rating</span>
      <p>{hotel.city.name}, {hotel.city.country}</p>
      <div>$ {hotel.price}</div>
      </section>
      <button onClick={handleNavigate}>See more...</button>
     </header>
    </article>
  )
}

export default HotelCard