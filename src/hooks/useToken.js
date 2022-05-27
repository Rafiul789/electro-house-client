import { useEffect, useState } from "react"

const useToken=user=>{
const[token,setToken]=useState('')
useEffect(
    ()=>{

const email=user?.user?.email
const currentUser={email:email}

if(email){
    fetch(`https://tranquil-bayou-94751.herokuapp.com/${email}`,{
        method:'PUT',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(currentUser)

    } )
    .then(res=> res.json())
    .then(data=>{console.log(data)
    
    const token=data.token
    localStorage.setItem('token',token)
    setToken(token)
    })
}

    }
    
    ,[user]


)
return[token]
}
export default useToken;