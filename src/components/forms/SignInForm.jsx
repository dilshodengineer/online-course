import React from 'react';
import Input from '../ui/Input';

const SignInForm = () => {
  return (
    <form>

        <Input
        type='email'
        placeholder='Email@'
        value={null}
        onChange={() => {}}
        label="Emailingiz"
        className='mt-3'
        />
        <Input
        type='password'
        placeholder='****'
        value={null}
        onChange={() => {}}
        label="Parolingiz"
        className='mt-3'
        />

        <hr />

        <button className="btn btn-dark w-100">Yuborish</button>
    </form>
  )
}

export default SignInForm