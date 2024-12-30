import React, { useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
const name = useRef(null);
const email=useRef(null);
const password=useRef(null);
const handleButtonClick = (e)=>{
  e.preventDefault();
//   const message = checkValidData(email.current.value,password.current.value);
//   setErrorMessage(message);
//   if(message) return;
//   if(!isSignInForm){
//   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//   .then((userCredential) => { 
//     const user = userCredential.user;
//     updateProfile(auth.currentUser, {
//       displayName: name.current.value, photoURL: USER_AVATER
//     }).then(() => {
//       const {uid,email,displayName,photoURL}=auth.currentUser;
//         dispatch(addUser({uid: uid, email:email,displayName:displayName , photoURL:photoURL}));
//       navigate("/browse");
//     }).catch((error) => {
//     });

//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorCode,"-",errorMessage)
//   });

//   }
//   else{
//     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     navigate("/browse");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorCode,"-",errorMessage)
//   });
//   }
}
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
        className="absolute p-12 bg-opacity-85  bg-base-300 my-36 left-0 right-0 mx-auto w-3/12  text-white space-y-4 rounded-xl shadow-sm border-purple-800 border-2  shadow-purple-700"
      >
        <p className="text-3xl font-bold mb-10 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
          ref={name}
            className="w-full p-3  rounded-md outline-none text-gray-100"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
        ref={email}
          className="w-full p-3  rounded-md outline-none text-gray-100"
          type="email"
          placeholder="Email or mobile number"
        />
        <input
        ref={password}
          className="w-full outline-none p-3 rounded-md text-gray-100 "
          type="password"
          placeholder="Password"
        />
        <p className="text-lg text-red-500 my-3">{errorMessage}</p>
        <button onClick={handleButtonClick} className="bg-purple-800 w-full p-2 rounded-md font-semibold">
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
