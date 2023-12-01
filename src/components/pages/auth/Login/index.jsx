import React, { useEffect } from 'react'
import useInput from '../../../../hooks/useInput'
import Input from '../../../Elements/Input';
import Button from '../../../Elements/Button';
import { Link, useNavigate, redirect } from 'react-router-dom';
import { login } from '../../../../utils/network-data';
import { useAuthContext } from '../../../../context/AuthContext';


const LoginPage = () => {

  const [emailValue, emailValueChange] = useInput('');
  const [passwordValue, passwordValueChange] = useInput('');
  const {handleLogin, user, getToken} = useAuthContext();  
  const navigate = useNavigate();

  const handleButtonLogin = async () => {
    await handleLogin(emailValue, passwordValue);
    navigate("/")
  }

  return (
    <div className='border-4 border-slate-600 dark:border-white w-full mx-auto min-h-12 rounded-lg'>
        <h2 className='text-2xl font-bold text-slate-600 dark:text-white text-center pt-8'>Login</h2>
        <div className='w-11/12 mx-auto pb-8'>
          <Input 
              label={'Email'} 
              type={'email'} 
              placeholder={'example@example.com'} 
              name={'email'} 
              style={'border border-2 border-slate-300 dark:border-white dark:bg-slate-600 dark:text-white rounded-md p-2 w-full'} 
              styleLabel={'block mb-2 font-semibold text-slate-600 dark:text-white'}
              value={emailValue}
              onValueChange={emailValueChange}
          />
          <Input 
              label={'Password'} 
              type={'password'} 
              placeholder={'********'} 
              name={'password'} 
              style={'border border-2 border-slate-300 dark:border-white dark:bg-slate-600 dark:text-white rounded-md p-2 w-full'} 
              styleLabel={'block mt-4 mb-2 font-semibold text-slate-600 dark:text-white'}
              value={passwordValue}
              onValueChange={passwordValueChange}
          />
          <Button children={'Login'} size={'large'} optionalClass={"mt-4 bg-blue-500 w-full text-white font-semibold"} onClick={handleButtonLogin}/>
          <p className='text-sm mt-2 text-slate-600 dark:text-white'>
            Don't have any account ? <Link to={'/auth/register'} className='text-blue-700 dark:text-blue-100 underline'>Register here</Link>  
          </p>
        </div>
    </div>
  )
}

export default LoginPage