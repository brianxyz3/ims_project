import type React from 'react';
import { Link } from 'react-router-dom'

interface AuthHeader {
  title: string;
  text: string;
  link: {
    link: string;
    text: string
  }
}

const AuthHeader:React.FC<AuthHeader> = ({link, title, text}) => {
  return (
    <div>
      <div className='flex items-center mb-8 lg:mt-20 justify-between'>
        {/* HEADER TO BE REMOVED */}
        <div className="flex items-center gap-2">
          <div className='duration-300 min-w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold'>
            I
          </div>
          <span className='text-lg font-semibold text-foreground'>InvManager</span>
        </div>

        <Link to={link.link} className='text-muted-foreground hover:text-primary font-medium hover:underline underline-offset-2 duration-300'>{link.text}</Link>
      </div>
      

        <div className="mb-5">
          <h2 className='text-3xl font-bold mb-2'>{title}</h2>
          <p className="text-muted-foreground">{text}</p>
        </div>

    </div>
  )
}

export default AuthHeader