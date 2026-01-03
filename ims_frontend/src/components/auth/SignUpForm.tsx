import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import CompanyInfoForm from './CompanyInfoForm';


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyEmail: "",
    warehouse: "",
    location: "",
    headQuarter: "",
    password: "",
  });

  const [isPersonalFormSubmitted, setIsPersonalFormSubmitted] = useState(false);



  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.currentTarget.name;
    const value = evt.currentTarget.value;    
    setFormData((currState) => ({...currState, [name]: value}))
  }


  return (
    <div className='relative'>
      
        <div className={`${isPersonalFormSubmitted ? "-translate-x-400" : "translate-x-0"} relative duration-500 transition-transform`}>
            <PersonalInfoForm 
                formData={formData}
                submitForm={setIsPersonalFormSubmitted} 
                handleInput={handleInputChange} />
        </div>
        
        <div className={`${isPersonalFormSubmitted ? "translate-x-0" : "translate-x-400"} absolute w-full top-0 duration-500 transition-transform`}>
            <CompanyInfoForm
                formData={formData}
                unSubmitForm={setIsPersonalFormSubmitted} 
                handleInput={handleInputChange}/>
        </div>

    </div>
  )
}

export default SignUpForm;