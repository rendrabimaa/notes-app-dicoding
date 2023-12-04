import React from 'react'
import Button from '../../../Elements/Button'
import Input from '../../../Elements/Input'
import useInput from '../../../../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../../../utils/network-data';

const RegisterPage = () => {
  const [name, nameChange] = useInput('');
  const [email, emailChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [confirmPassword, confirmPasswordChange] = useInput('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if(confirmPassword !== password) {
      alert("Your verification password isn't with your password");
      return;
    }

    await register({name, email, password})
    navigate("/auth/login")    
  }

  return (
    <div className='border-4 border-slate-600 dark:border-white w-full mx-auto min-h-12 rounded-lg'>
        <h2 className='text-2xl font-bold text-slate-600 dark:text-white text-center pt-8'>Register</h2>
        <div className='w-11/12 mx-auto pb-8'>
            <Input 
                label={'Name'} 
                type={'text'} 
                placeholder={'Input your name here'} 
                name={'name'} 
                style={'border border-2 border-slate-300 dark:border-white dark:bg-slate-600 dark:text-white rounded-md p-2 w-full'} 
                styleLabel={'block mt-4 mb-2 font-semibold text-slate-600 dark:text-white'}
                value={name}
                onValueChange={nameChange}
            />
            <Input 
                label={'Email'} 
                type={'email'} 
                placeholder={'example@example.com'} 
                name={'email'} 
                style={'border border-2 border-slate-300 dark:border-white dark:bg-slate-600 dark:text-white rounded-md p-2 w-full'} 
                styleLabel={'block mt-4 mb-2 font-semibold text-slate-600 dark:text-white'}
                value={email}
                onValueChange={emailChange}
            />
            <Input 
                label={'Password'} 
                type={'password'} 
                placeholder={'********'} 
                name={'password'} 
                style={'border border-2 border-slate-300 dark:border-white dark:bg-slate-600 dark:text-white rounded-md p-2 w-full'} 
                styleLabel={'block mt-4 mb-2 font-semibold text-slate-600 dark:text-white'}
                value={password}
                onValueChange={passwordChange}
            />
            <Input 
                label={'Retype your password'} 
                type={'password'} 
                placeholder={'********'} 
                name={'confirmPassword'} 
                style={'border border-2 border-slate-300 dark:border-white dark:bg-slate-600 dark:text-white rounded-md p-2 w-full'} 
                styleLabel={'block mt-4 mb-2 font-semibold text-slate-600 dark:text-white'}
                value={confirmPassword}
                onValueChange={confirmPasswordChange}
            />
            <Button children={'Register'} size={'large'} optionalClass={"mt-4 bg-blue-500 w-full text-white font-semibold"} onClick={handleRegister} />
          <p className='text-sm mt-2 text-slate-600 dark:text-white'>
            Have any account ? <Link to={'/auth/login'} className='text-blue-700 dark:text-blue-100 underline'>Login here</Link>  
          </p>
        </div>
    </div>
  )
}

export default RegisterPage