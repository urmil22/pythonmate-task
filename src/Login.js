import axios from 'axios';
import React from 'react'
import { useAuth } from './context/AuthProvider';

const Login = () => {

    const {handleToken, token} = useAuth();

  
    const authenticateUser = async() => {
        const res = await axios({
          method:'POST',
          url:"http://13.127.127.40/api/token/",  //generates token
          data:{
            email: "jayasag565@bunlets.com",  //verified email credentials
            password: "123",
          }

        })
        
        handleToken(res.data.refresh) //stores token
    }
    
  return (
    <div>
        <form className='form'>
            <label htmlFor='email'>Email:</label>
            <input type='email' required/>

            <label htmlFor='password'>Password:</label>
            <input type='password' required/>
            <button className='login-btn' onClick={authenticateUser}>Login</button>
        </form>
    </div>
  )
}

export default Login