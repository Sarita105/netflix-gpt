import { useState } from 'react';
import Header from './Header';
const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninform = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_small.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 left-126 text-white rounded-lg bg-opacity-8">
        <h1 className="font-bold text-3xl py-4">{isSigninForm ? 'Sign In' : 'Sign up'}</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
         {!isSigninForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
        {isSigninForm ? 'Sign In' : 'Sign up'}
        </button>
        <p className='cursor-pointer' onClick={toggleSigninform}>
        {isSigninForm ? 'New to netflix? Sign up now' : 'Already registered? Sign in'}
          </p>
      </form>
    </div>
  );
};

export default Login;
