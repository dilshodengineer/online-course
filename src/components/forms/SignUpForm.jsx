import React from 'react';
import Input from '../ui/Input';

const SignUpForm = () => {
  return (
    <form>

        <Input
        type='text'
        placeholder='Ismingiz'
        value={null}
        onChange={() => {}}
        label="To'liq ismingiz"
        className='mt-3'
        />
        <Input
        type='email'
        placeholder='Email@'
        value={null}
        onChange={() => {}}
        label="Email yarating"
        className='mt-3'
        />
        <Input
        type='password'
        placeholder='Parol ****'
        value={null}
        onChange={() => {}}
        label="Parol"
        className='mt-3'
        />
        <Input
        type='password'
        placeholder='Parolni tasdiqlang ****'
        value={null}
        onChange={() => {}}
        label="Parolni tasdiqlang"
        className='mt-3'
        />

        <hr />

        <button className="btn btn-dark w-100">Yuborish</button>
    </form>
  )
}

export default SignUpForm;