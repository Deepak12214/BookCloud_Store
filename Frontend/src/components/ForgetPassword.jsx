import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkValidData } from '../utils/validate';
import { toast } from 'react-toastify';

function ForgetPassword() {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const toggleSignInForm = () => {
        navigate('/logpage');
      };

      const handleForgetPassword = async (e) => {
          e.preventDefault();
          const message = checkValidData(email,password);
          toast.error(message);
          if(message) return;
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/forgetpassword`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              credentials: 'include',
              body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
            toast(data.message);
              navigate('/logpage');
            } else {
        toast.error(data.message);
            } 
        };

  return (
    <div>
      <div className="bg absolute">
        <img
          className="h-screen w-screen opacity-15 "
          src="https://imgs.search.brave.com/bT0aGDi_OXlNcbAuML87xBPVnQZ7C_W_ZjIVLddEXMg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdWNjZXNzLWVk/dWNhdGlvbi1jb25j/ZXB0XzY3MDE0Ny00/NzY4Ni5qcGc_c2Vt/dD1haXNfaHlicmlk"
          alt=""
        />
      </div>
      <form  
        className={`absolute p-12 bg-opacity-85  bg-base-300  left-0 right-0   w-11/12 text-white space-y-4 rounded-xl shadow-sm border-purple-800 border-2  shadow-purple-700 my-36 lg:w-3/12  mx-auto`}
      >
        <p className="text-3xl font-bold mb-10 ">
          Forget Password
        </p>
        
        <input
          value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3  rounded-md outline-none text-gray-100"
            type="text"
            placeholder="Email"
          />
        
        <input
        value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full outline-none p-3 rounded-md text-gray-100 "
          type="password"
          placeholder="Password"
        />
        <button onClick={handleForgetPassword}  className="bg-purple-800 w-full p-2 rounded-md font-semibold">
          Forget Password
        </button>
        <p className="pt-3 px-0.5 cursor-pointer " onClick={toggleSignInForm}>
        <span className='text-purple-500 font-semibold'>Sign Up </span>
        &
        <span className='text-purple-500 font-semibold'> Sign In </span>
          in BookStore
        </p>
      </form>
    </div>
  )
}

export default ForgetPassword
