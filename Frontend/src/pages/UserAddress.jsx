import React from 'react'
import TextInput from '../Components/TextInput'
import { useFormContext } from 'react-hook-form'

const UserAddress = () => {
  const {control}=useFormContext()
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <TextInput name="phone" title="Mobile no" required={true} control={control} />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex gap-2'>
          <TextInput name="address.Address1" title="Address1" required={true} control={control} />
          <TextInput name="address.Address2" title="Address2" required={false} control={control} /></div>
        <div className='flex gap-2'>
          <TextInput name="address.Address3" title="Address3" required={true} control={control} /> 
          <TextInput name="address.pincode" title="Pincode" required={true} control={control} /></div>
      </div>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default UserAddress