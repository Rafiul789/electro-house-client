import React from 'react';
import { useSignInWithGoogle,useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';
import Loading from './Loading';
const Signup = () => {

const navigate=useNavigate()

    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

const [token]=useToken(user||googleuser)

   let SignupError;
if(loading||googleloading||updating){
  return   <Loading></Loading>
}
if(error||googleerror||updateError){
    SignupError =<p className="text-red-600">{error?.message||googleerror?.message}</p>
}

if(token||user||googleuser){
  navigate('/')
} 
const onSubmit =async data =>{console.log(data) 
 await   createUserWithEmailAndPassword(data.email,data.password)
 await updateProfile({ displayName: data.name });

} ;




    return (
        <>   
        <div className="container flex justify-center items-center bg-white">
        
           
          <div className="p-10 border-[1px] mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
          <h1 className="text-4xl text-center font-semibold mb-5" >Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-1  p-5"  > <input type="text" className="border-[1px] border-slate-500 rounded-sm w-80 p-5 " placeholder="Name"   {...register("name", {
                  required:{
                      value:true,
                      message:'Name is required'
                  },
          
          })} />
              {errors.name?.type === 'required' && <span className="text-red-600"  >{errors.name.message} </span> }   
               
             </div>
              <div className="flex flex-col space-y-1 mb-5 p-5"  > <input className="border-[1px] border-slate-500 rounded-sm w-80 p-5 mb-5" placeholder="E-Mail or Phone number"   {...register("email", {
                  required:{
                      value:true,
                      message:'Email is required'
                  },
            pattern:{value:
                /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message:'Provide a valid email'  } 
          })} />
              {errors.email?.type === 'required' && <span className="text-red-600"  >{errors.email.message} </span> }   
              {errors.email?.type === 'pattern' && <span className="text-red-600"  >{errors.email.message} </span> }   
              
              <input type="password" className="p-5 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password"   {...register("password",{
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    } )} />
             {errors.password?.type === 'required' && <span className="text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className=" text-red-500">{errors.password.message}</span>} </div>
              
              {SignupError}
              <input type='submit' value="Sign Up"  className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]"/>
            </form>
            
           
            <div className="flex flex-col space-y-1">
              
              <p className="font-semibold text-[#0070ba]">Already Have An Account ?  <Link className="text-red-500"    to='/login'>Login</Link>  </p>
             
            </div>
            <div className="flex flex-col space-y-5 w-full">
             
              <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
              </div>
              
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
    );
};

export default Signup;