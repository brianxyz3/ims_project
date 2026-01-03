import SignUpHeader from '@/components/auth/AuthHeader';
import SignUpForm from '@/components/auth/SignUpForm';

// import React from 'react'

const SignUpPage = () => {
  return (
    <div className='mt-10'>
      <SignUpHeader link={{link: "/login", text: "Log In"}} title='Create your account' text='Join thousands of businesses tracking their assets in real-time.'/>

      <SignUpForm/>
    </div>
  )
}

export default SignUpPage;

        