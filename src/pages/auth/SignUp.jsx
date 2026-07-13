import React from 'react'
import SignUpForm from '../../components/forms/SignUpForm';

const SignUp = () => {
  return (
    <div className='container mt-5'>

      <h3 className='text-center'>
        Ro'yxatdan o'tish
      </h3>

      <div className=" mt-3 row justify-content-center">
        <div className="col-xl-4 col-md-5 col-sm-7">
          <SignUpForm/>
        </div>
      </div>

    </div>
  )
}

export default SignUp;