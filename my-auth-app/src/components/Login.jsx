import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {

    const userData= {email:'ayush@repidops.com', password :'repid123'}

   const navigate = useNavigate()

    const [user , setUser] = useState({
        email:"",
        password:""
    })

    function submit(){
        if(user.email ===userData.email && user.password === userData.password){
            alert('login success')
            localStorage.setItem("isLoggedIn" , "true")
            setUser({email:'',password:""})
            const isLoggedIn = localStorage.getItem('isLoggedIn')
            isLoggedIn ? navigate('/home') : navigate('/login')
        }else{
            alert('login failed')
        }
    }

  return (
    <>
    <div className='text-4xl mb-4'>
        Login
    </div>
    <div className='flex flex-col gap-10'>
    <input type="text" placeholder='Email' value={user.email} className='border-2 text-white' onChange={(e) => setUser({...user, email:e.target.value})}/>
    <input type="text" placeholder='Password' value={user.password} className='border-2 text-white' onChange={(e) => setUser({...user, password:e.target.value})}/>

    <button onClick={submit}>Submit</button>
    </div>
    </>
  )
}

export default Login