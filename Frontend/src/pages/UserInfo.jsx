import React from 'react'
import TextInput from '../Components/TextInput'
import { useFormContext } from 'react-hook-form'
import SelectInput from '../Components/SelectInput';

const UserInfo = ({handleNext}) => {
  const { control } = useFormContext(); 
  return (
    <div className='flex-col  h-full justify-items-center'>
    <div className='w-1/2'>
      <TextInput name="name" title="Name" required={true} control={control} />
      <SelectInput name="sex" title="Gender" required={true} control={control} option={["Male","Female"]}/>
      <TextInput name="email" title="Email" required={true} control={control} />
    </div>
    <button className='text-center w-1/2' onClick={()=>handleNext()}>Next</button>
    </div>
  );
};

export default UserInfo;
