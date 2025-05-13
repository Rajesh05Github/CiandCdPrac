import {useForm} from "react-hook-form"
import { FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import UserInfo from "./UserInfo"
import UserAddress from "./UserAddress"
import { useState } from "react"
import { userInfoschema,addressSchema } from "./SchemaTest"
import axios from "axios";

const UserDetail = () => {
  const [currCheck,setCurrCheck]=useState("info")
  const method = useForm({
    mode:"onTouched",
    resolver:zodResolver(currCheck==="info"?userInfoschema:addressSchema),
    defaultValues:{
      name:"",
      sex:"Male",
      email:"",
      phone:"",
      address:{
        Address1:"",
        Address2:"",
        Address3:"",
        pincode:""
      }
    }
  })

  const handleNext = async()=>{
    const isValid=await method.trigger()
    if(!isValid)return 
    else  setCurrCheck((prev)=>prev==="info"?"address":"info")
  }

  const handleFormSubmit=async()=>{
  let data=method.getValues()
  try{
  const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/create`,data);
 
  }
  catch(e){
    console.log(e)
  }
  }



  return (
    <div>
        <div className="flex w-full border border-black p-2 rounded-md cursor-pointer">
            <div className={`w-1/2 text-center rounded p-1 ${currCheck==="info"?"border-blue-900 bg-blue-500 text-white font-bold":""}`} onClick={()=>handleNext()}>UserInfo</div>
            <div className={`w-1/2 text-center rounded-md p-1 ${currCheck==="address"?"border-blue-900 bg-blue-500 text-white font-bold":""}`} onClick={()=>handleNext()}>UserAddress</div>
        </div>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(handleFormSubmit)}>
          {currCheck === "info"?<UserInfo handleNext={handleNext}/>:<UserAddress/>}
          </form>
        </FormProvider>
    </div>
  )
}

export default UserDetail