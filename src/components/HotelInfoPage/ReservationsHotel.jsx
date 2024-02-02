import React from 'react'
import { useForm } from 'react-hook-form'

const ReservationsHotel = () => {

  const {handleSubmit, reset, register} = useForm()

  const submit = data => {
    
  }

  return (
    <div>
      <h3>Reservations</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Check-in</span>
          <input {...register('checkIn')} type="date" />
        </label>
        <label>
          <span>Check-out</span>
          <input {...register('checkOut')} type="date" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReservationsHotel