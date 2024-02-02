import { configureStore } from "@reduxjs/toolkit";
import hotels from './state/hotels.state'

export default configureStore({
  reducer: {
    hotels
  }
})