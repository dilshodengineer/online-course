import React from 'react';
import SignInForm from '../../components/forms/SignInForm';

const SignIn = () => {
  return (
    <div className='container mt-5'>

      <h3 className='text-center'>
        Tizmga kirish
      </h3>

      <div className=" mt-3 row justify-content-center">
        <div className="col-xl-4 col-md-5 col-sm-7">
          <SignInForm/>
        </div>
      </div>

    </div>
  )
}

export default SignIn;