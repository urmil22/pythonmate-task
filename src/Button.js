import React, { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import { Link } from "react-router-dom";

const Button = () => {

  const [form, setForm] = useState(true);
  

  return (
    <div className='button-div'>
       <Link to='/login'> <button  className='button'>Login</button> </Link>
       <Link to='/register'><button  className='button'>Register</button> </Link>
    </div>
  )
}

export default Button