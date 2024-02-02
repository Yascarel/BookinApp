
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UnknownPages from './pages/UnknownPages'
import HotelInfoPage from './pages/HotelInfoPage'
import HeaderShared from './components/shared/HeaderShared'

function App() {
 

  return (
    <>
     <HeaderShared/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/RegisterPage' element={<RegisterPage/>}/>
      <Route path='/hotel/:id' element={<HotelInfoPage/>} />
      <Route path='*' element={<UnknownPages/>}/>
     </Routes>
    </>
  )
}

export default App
