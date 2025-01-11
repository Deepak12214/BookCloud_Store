import React, { useState ,useRef} from "react";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice.js'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    //Check valid email and password
    const message = checkValidData(email,password);
    setErrorMessage(message);
    if(message) return;

    if(isSignInForm){//Login 
      const response = await fetch('http://localhost:4001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (response.ok) {
        const { _id, username, name, email, age, profilepic } =  data.user;
      dispatch(addUser({
        _id,
        username: username || '',
        name: name || '',
        email: email || '',
        age: age || '', 
        profilepic: profilepic || 'default.webp', 
      }));
        navigate('/');
      } else {
        setErrorMessage(data.message);
      }
    }
    else{//Registration
      const response = await fetch('http://localhost:4001/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name , email, password , age ,username })
      });
  
      const data = await response.json();
      if (response.ok) {
        setIsSignInForm(!isSignInForm);
        navigate('/logpage');
      } else {
        setErrorMessage(data.message);
      }
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
        className={`absolute p-12 bg-opacity-85  bg-base-300  left-0 right-0 mx-auto w-3/12  text-white space-y-4 rounded-xl shadow-sm border-purple-800 border-2  shadow-purple-700 ${isSignInForm ? "my-36" : "my-12"}`}
      >
        <p className="text-3xl font-bold mb-10 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
          value={name} onChange={(e) => setName(e.target.value)}
            className="w-full p-3  rounded-md outline-none text-gray-100"
            type="text"
            placeholder="Full Name"
          />
        )}
        {!isSignInForm && (
          <input
          value={username} onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3  rounded-md outline-none text-gray-100"
            type="text"
            placeholder="Username"
          />
        )}
        {!isSignInForm && (
          <input
          value={age} onChange={(e) => setAge(e.target.value)} min={1}
            className="w-full p-3  rounded-md outline-none text-gray-100"
            type="number"
            placeholder="Age"
          />
        )}
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
        <p className="text-lg text-red-500 my-3">{errorMessage}</p>
        <button onClick={handleLogin}  className="bg-purple-800 w-full p-2 rounded-md font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="pt-3 px-0.5 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? "
            : "Already registered? "}
            <span className="text-purple-800 font-semibold">{isSignInForm
            ? "Sign Up Now"
            : "Sign In Now."}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
