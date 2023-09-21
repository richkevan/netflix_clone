import React, { useEffect, useState } from 'react';
import {ReactComponent as Popcorn} from '../assets/popcorn.svg';
import { useFirebaseAuth } from '../firebase/firebase-auth-context';
import devices from '../assets/Devices.png';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const { signUpUser } = useFirebaseAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(email);
    console.log(passwordConform());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, confirmPassword]);
  const passwordConform = () => {
    if (
      password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      password.match(/[!@#.?]/g) &&
      password.match(/[^a-zA-Z\d]/g) &&
      password.length >= 8 &&
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password, confirmPassword);
    if (email === "") {
      const formData = new FormData(event!.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log("DATA: ",data);
      setEmail(data.email.toString());
    }
    else {
      console.log(email);

      console.log(password, confirmPassword);
      signUpUser({email, password});
      navigate("/")
    }
  };

  return (
    <>
    {email === "" ?
    <div className="min-h-screen w-full bg-Signup text-white">
      <div className="container mx-auto h-screen">
        
        <>
        <div className="text-center flex flex-col justify-center 
        pt-24 md:pt-28 lg:pt-32 
        pb-8 md:pb-12 lg:pb-16
        min-h-[380px] md:min-h-[412px] lg:min-h-[600px]">
          <div className="max-w-[calc(100%-64px)] mx-auto my-auto">
          <h1 className="text-5xl font-extrabold">Unlimited movies, TV shows, and more.</h1>
          <p className="text-3xl">Watch anywhere. Cancel anytime.</p>
          <p className="text-xl font-semibold">Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="flex gap-8 w-2/3 mx-auto" onSubmit={submitHandler}>
            <input type="email" name="email" placeholder="Email address" className="w-[450px] h-10 bg-gray-500 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md flex-[2_2_60%]" 
            required={true}
            />
            <button 
            className="w-[450px] h-10 bg-red-600 mt-4 mb-4 px-2 text-white placeholder:text-white rounded-md flex-[1_1_40%] disabled:bg-slate-400" 
            type="submit"
            >Get Started</button>
          </form>
          </div>
        </div>
        <div className="w-[90%] bg-Radial p-6 mx-auto grid place-items-center absolute bottom-0">
          <div className='flex content-center'>
          <Popcorn className="justify-self-end"/>
          <div className=' flex flex-col justify-center items-start pl-4'>
          <h3 className=' text-lg font-bold'>The Netflix you love for just $6.99.</h3>
          <p>Gethe the Standard with ads plan.</p>
          <button 
          className='font-bold' 
          
          >
            Learn More
            <span className='pl-4 text-3xl'>{'>'}</span></button>
          </div>
          </div>
        </div>
        </>
      </div>
    </div>
    :
    <div className="min-h-screen w-full bg-white text-black">
      <div className="container mx-auto h-screen flex flex-col gap-6 justify-center items-center">
      <span>
        <img src={devices} alt='Netflix Logo' />
      </span>
      <div className='flex flex-col text-center'>
      <span className='uppercase text-sm'>
        Step 2 of 2
      </span>
      <span className='text-4xl font-bold'>
        Finish setting up your account.
      </span>
      </div>
      <div className='w-1/3 flex flex-col gap-8 items-center'>
        <form onSubmit={submitHandler}>
      <input 
      type="password" 
      placeholder="Password" 
      onChange={(e) => setPassword(e.target.value)} 
      className={'p-4 border border-gray-400 rounded-md placeholder:text-xl bg-white' + (passwordConform() ? ' border-green-500 ring-green-500 outline-green-500' : ' border-red-600 ring-red-600 outline-red-600')}
      />
      <input 
      type="password" 
      placeholder="Confirm Password" 
      onChange={(e) => setConfirm(e.target.value)}
      className={'p-4 border border-gray-400 rounded-md placeholder:text-xl bg-white' + (password === confirmPassword ? ' border-green-500 ring-green-500 outline-green-500' : ' border-red-600 ring-red-600 outline-red-600')}
      />
      <button 
      className=' bg-red-600 text-white text-3xl p-4 w-1/3 disabled:bg-gray-500'
      disabled={!passwordConform()}
      >Finish</button>
      </form>
      </div>
      
      </div>
    </div>
    }
    </>
  );
};

export default SignUpPage;