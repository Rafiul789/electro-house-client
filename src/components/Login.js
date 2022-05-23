import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

if(user){
    console.log(user)
}



    return (

<>   
<div className="container flex justify-center items-center bg-white">

   
  <div className="p-10 border-[1px] mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
  <h1 className="text-4xl text-center font-semibold mb-5" >Login</h1>

    <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail or Phone number" />
    <div className="flex flex-col space-y-1">
      <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" />
      <p className="font-bold text-[#0070ba]">Forgot password?</p>
    </div>
    <div className="flex flex-col space-y-5 w-full">
      <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
      <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
        <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
      </div>
      <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Sign Up</button>

      <button onClick={()=>signInWithGoogle()}    className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Continue With Google</button>
    </div>
    <div className="flex space-x-1 p-20 text-sm">
      <p className="hover:underline cursor-pointer">German</p>
      <div className="border-r-[1px] border-r-slate-300"></div>
      <p className="font-bold hover:underline cursor-pointer">English</p>
    </div>
  </div> 

  <div className="absolute bottom-0 w-full p-3 bg-[#F7F9FA] flex justify-center items-center space-x-3 text-[14px] font-medium text-[#666]">
    <p >Contact Us</p>
    <p >Privacy</p>
    <p >Legal</p>
    <p >Policy </p>
    <p >Worldwide </p>
  </div>
</div>    </>

        )
};

export default Login;