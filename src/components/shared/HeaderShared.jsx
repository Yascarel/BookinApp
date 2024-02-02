import React from 'react'
import { Link } from 'react-router-dom'

const HeaderShared = () => {
  return (
    <header>
      <h1><Link to='/'>BokingApp</Link></h1>
      <nav>
        <ul>
          <li><Link to='/RegisterPage'>Register</Link></li>
          <li><Link to='/LoginPage'>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderShared