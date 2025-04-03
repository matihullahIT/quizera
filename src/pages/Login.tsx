import { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure you import the CSS for react-toastify
import { Bounce } from "react-toastify"; // Import Bounce transition
import { MyContext } from "../context/usercontext"; // Import your context

const Login = () => {
  const [showpass, setshowpass] = useState(false);
  const { data, setData } = useContext(MyContext); // Access context values
  
  const PasswordToggler = () => {
    setshowpass(!showpass);
  };

  interface IFormInput {
    username: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (formData) => {
    console.log(formData);
    console.log(data); // Log context data
    // Update context with form data
    setData(`Welcome, ${formData.username}!`);

    // Show toast notifications
    toast.success("Login Successfully");
    toast.info(`Welcome ${formData.username}`);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={30}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="font-bold text-center text-blue-600 mb-6">Login</h1>
        {/* <p className="text-center mb-4">{data}</p> Display context data */}
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <div className="font-semibold text-center text-blue-600 mb-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-4">
                <label htmlFor="username">Username</label>
                <input
                  {...register("username", { required: true, maxLength: 20 })}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <label htmlFor="password">Password</label>
                <div className="flex items-center border rounded-md px-3 py-2 space-x-2">
                  <input
                    type={showpass ? "text" : "password"}
                    {...register("password", { pattern: /.*/ })}
                    className="flex-1 outline-none"
                  />
                  <span
                    onClick={PasswordToggler}
                    className="cursor-pointer text-gray-500"
                  >
                    {showpass ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="w-full my-2 bg-blue-600 text-white py-2 rounded-md cursor-pointer hover:bg-blue-700"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;