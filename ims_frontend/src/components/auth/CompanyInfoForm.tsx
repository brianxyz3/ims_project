// import React from 'react'
import { Input } from '@/components/ui/input';
import { Building, Mail, MapPin, Warehouse } from 'lucide-react';
import { Button } from '../ui/button';
import React from 'react';
import type { Company } from '@/types/company';
import { Checkbox } from '../ui/checkbox';


interface CompanyInfoFormProps {
  formData: Company;
  unSubmitForm: (arg: boolean) => void;
  handleInput: (evt: React.ChangeEvent<HTMLInputElement>) => void
}


const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({formData, unSubmitForm, handleInput}) => {

  
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formData)
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div>
          <label htmlFor="companyEmail" className="inline-block mb-2 font-medium">Company Email:</label>
          <div className='relative'>
            <Mail className='size-5 absolute bottom-2 left-2'/>
            <Input required type='companyEmail' onChange={(evt) => handleInput(evt)} value={formData.companyEmail} autoComplete='companyEmail' placeholder='name@company.com' id='companyEmail' name='companyEmail' className='pl-8'/>
          </div>
        </div>      
      
        <div>
          <label htmlFor="warehouse" className="inline-block mb-2 font-medium">Warehouse:</label>
          <div className='relative'>
            <Warehouse className='size-5 absolute bottom-2 left-2'/>
            <Input required onChange={(evt) => handleInput(evt)} value={formData.warehouse} autoComplete='warehouse' placeholder='Warehouse A' id='warehouse' name='warehouse' className='pl-8'/>
          </div>
        </div>

        <div>
          <label htmlFor="headQuarter" className="inline-block mb-2 font-medium">Head Quarter:</label>
          <div className='relative'>
            <Building className='size-5 absolute bottom-2 left-2'/>
            <Input required onChange={(evt) => handleInput(evt)} value={formData.headQuarter} autoComplete='head quarter' placeholder='123 Victoria Island, Lagos' id='headQuarter' name='headQuarter' className='pl-8'/>
          </div>
        </div>

        <div>
          <label htmlFor="location" className="inline-block mb-2 font-medium">Location:</label>
          <div className='relative'>
            <MapPin className='size-5 absolute bottom-2 left-2'/>
            <Input required onChange={(evt) => handleInput(evt)} value={formData.location} autoComplete='location' placeholder='123 Lekki, lagos' id='location' name='location' className='pl-8'/>
          </div>
        </div>

        <div className="flex items-center gap-4 py-3">
          <Checkbox
            id="t&c"
            required
            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <label htmlFor="t&c" className="text-xs">I agree to the <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span>.</label>
        </div>




        <div className="flex justify-end gap-4">
          <Button
            type='button'
            onClick={() => unSubmitForm(false)}
            className='h-11 bg-blue-700 mt-6'>
            Go Back
          </Button>

          <Button
            className='h-11 bg-blue-700 mt-6'>
            Create Account
          </Button>

        </div>

    </form>
  )
}

export default CompanyInfoForm;