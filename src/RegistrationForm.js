import React,{useState} from 'react';
import Axios from 'axios';
import axios from  "axios";

const RegistrationForm = () => {
    const url= 'http://13.127.127.40/api/user/';
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

//     function handleSubmit(e) {
//        e.preventDefault();
//        Axios.post(url, {
//          first_name: data.first_name,
//          last_name: data.last_name,
//          email: data.email,
//          password: data.password
//  })
//     .then(res=>{
//         setMessage(res.data.message)
//     })
//     .catch(err=>console.log(err))
//     }

    const formSubmit = async(e) => {
      try{
        e.preventDefault();
      const res = await axios({
        method:'POST',
        url:"http://13.127.127.40/api/user/",
        data:{
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password
  }
      })

      setMessage(res.data.message)
      } catch(err){
        console.log(err)
      }
      
    }

   function handleSubmit(e) {
       const newData = { ...data }
       newData[e.target.id] = e.target.value
       setData(newData)
   }

  return (
    <div >
       <form className='form' onSubmit={(e) => formSubmit(e)}>
        <label htmlFor='first_name' >First name:</label>
        <input onChange={(e) => handleSubmit(e)} value={data.first_name} type='text' id='first_name' required/>

        <label htmlFor='last_name' >Last name:</label>
        <input onChange={(e) => handleSubmit(e)} value={data.last_name} type='text' id='last_name' required />

        <label htmlFor='email' >Email:</label>
        <input onChange={(e) => handleSubmit(e)} value={data.email} type='email' id='email' required />

        <label htmlFor='password' >Password:</label>
        <input onChange={(e) => handleSubmit(e)} value={data.password} type='password' id='password' required />
        <button className='submit-btn'>Submit</button>       
       </form>

       <p>{message}</p>
    </div>
  )
}

export default RegistrationForm