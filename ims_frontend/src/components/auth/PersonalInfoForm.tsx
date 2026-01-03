// import React from 'react'
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock, Mail, User2Icon } from 'lucide-react';
import { Button } from '../ui/button';
import React, { useState } from 'react';
import type { User } from '@/types/user';


interface PersonalInfoFormProps {
    formData: User;
    submitForm: (arg: boolean) => void;
    handleInput: (evt: React.ChangeEvent<HTMLInputElement>) => void
}


const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({formData, submitForm, handleInput}) => {
  

  const [passwordStrength, setPasswordStrength] = useState<number>(0)
  const [showPw, setShowPw] = useState<boolean>(false)

  const passwordStrengthRemark = () => {
    switch (passwordStrength) {
      case 1: 
        return "Poor";
      case 2:
        return "Medium";
      case 3:
        return "Good";
      case 4:
        return "Excellent";
    }
  }

  
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formData)
    submitForm(true)
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      
      
        <div>
          <label htmlFor="firstName" className="inline-block mb-2 font-medium">FirstName:</label>
          <div className='relative'>
            <User2Icon className='size-5 absolute bottom-2 left-2'/>
            <Input required onChange={(evt) => handleInput(evt)} value={formData.firstName} autoComplete='first name' placeholder='John' id='firstName' name='firstName' className='pl-8'/>
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="inline-block mb-2 font-medium">LastName:</label>
          <div className='relative'>
            <User2Icon className='size-5 absolute bottom-2 left-2'/>
            <Input required onChange={(evt) => handleInput(evt)} value={formData.lastName} autoComplete='last name' placeholder='Doe' id='lastName' name='lastName' className='pl-8'/>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="inline-block mb-2 font-medium">Personal Email:</label>
          <div className='relative'>
            <Mail className='size-5 absolute bottom-2 left-2'/>
            <Input required type='email' onChange={(evt) => handleInput(evt)} value={formData.email} autoComplete='email' placeholder='name@gmail.com' id='email' name='email' className='pl-8'/>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="inline-block mb-2 font-medium">Password:</label>
          <div className='relative'>
            <Lock className='size-5 absolute bottom-2 left-2'/>
            <Input
              required
              onChange={(evt) => {
                handleInput(evt);
                let pwStrength = 0;
                if (/[a-z]/.test(evt.target.value)) pwStrength++;
                if (/[A-Z]/.test(evt.target.value)) pwStrength++;
                if (/\d/.test(evt.target.value)) pwStrength++;
                if (/\W/.test(evt.target.value)) pwStrength++;
                
                setPasswordStrength(pwStrength)
              }}
              minLength={8}
              maxLength={32}
              value={formData.password} autoComplete='password' placeholder='Min. 8 characters' name='password' className='px-8'
              type={showPw ? "text" : "password"} />
            <button type="button" onClick={() => setShowPw(currValue => (!currValue))} className='absolute bottom-2 right-2'>
              {
                showPw ?
                  <Eye/> :
                  <EyeOff/>
              }
            </button>
          </div>
          
          {/* Visual Password Strength Indicator  */}
          {Boolean(passwordStrength) &&
            <>
              <div className="flex gap-1 mt-4 h-1">
                <div className={`${passwordStrength >= 2 ? "bg-green-500" : "bg-red-500"} flex-1 rounded-full h-full{`}></div>
                <div className={`${passwordStrength >= 2 ? "bg-green-500" : "bg-foreground/80"} flex-1 rounded-full h-full{`}></div>
                <div className={`${passwordStrength >= 3 ? "bg-green-500" : "bg-foreground/80"} flex-1 rounded-full h-full{`}></div>
                <div className={`${passwordStrength === 4 ? "bg-green-500" : "bg-foreground/80"} flex-1 rounded-full h-full{`}></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">{passwordStrengthRemark()} strength</p>
            </>
          }

        </div>


        <Button
            className='w-32 ml-auto h-11 bg-blue-700 mt-6 font-medium'>Next</Button>

    </form>
  )
}

export default PersonalInfoForm;