import React from 'react'
import Button from '../../../Elements/Button'
import Input from '../../../Elements/Input'
import useInput from '../../../../hooks/useInput';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [email, emailChange] = useInput('');
  const [password, passwordChange] = useInput('');

  return (
    <div className='border-4 border-slate-600 dark:border-white w-full mx-auto min-h-12 rounded-lg'>
        <h2 className='text-2xl font-bold text-slate-600 dark:text-white text-center pt-8'>Register</h2>
        <div className='w-11/12 mx-auto pb-8'>
          <Input 
              label={'Email'} 
              type={'email'} 
              placeholder={'example@example.com'} 
              name={'email'} 
              style={'border border-2 border-slate-300 dark:border-white dark:bg-slate-600 dark:text-white rounded-md p-2 w-full'} 
              styleLabel={'block mb-2 font-semibold text-slate-600 dark:text-white'}
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
          <Button children={'Login'} size={'large'} optionalClass={"mt-4 bg-blue-500 w-full text-white font-semibold"} />
          <p className='text-sm mt-2 text-slate-600 dark:text-white'>
            Have any account ? <Link to={'/auth/login'} className='text-blue-700 dark:text-blue-100 underline'>Register here</Link>  
          </p>
        </div>
    </div>
  )
}

export default RegisterPage