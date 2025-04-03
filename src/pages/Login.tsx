import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FaEyeSlash,FaEye } from "react-icons/fa"
const Login = () => {
    const [showpass,setshowpass]=useState(false)
    const PasswordToggler=()=>{
        setshowpass(!showpass)
    }
    interface IFormInput {
      username: string
      password: string
    }
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    
    return (
    <>
    <div className="h-full w-full ">
        <div className="p-3  border-3 rounded-sm text-semibold text-blue-600 border-blue-600 shadow-blue-700">
            <h1>Login</h1>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
      <input {...register("username", { required: true, maxLength: 20 })} />
                <label htmlFor="username">Password</label>
      <input {...register("password", { pattern: /.*/ })} />
      <span>
        {showpass?<FaEye/>:<FaEyeSlash/>}
      </span>
      <input type="submit" />
    </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login