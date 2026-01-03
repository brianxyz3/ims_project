import AuthForm from '@/components/auth/AuthForm'
import SignUpHeader from '@/components/auth/AuthHeader'

const SignInPage = () => {
  return (
    <>
        <SignUpHeader link={{link: "/register", text: "Register"}} title='Welcome Back' text='Real-time asset tracking, right where you left off'/>

        <AuthForm/>
    </>
  )
}

export default SignInPage