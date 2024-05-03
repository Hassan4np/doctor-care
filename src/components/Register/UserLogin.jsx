import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const UserLogin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div className="usersignup page w-1/2 mx-auto h-full">
      <div className="mt-[30%]">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
           
            <div className="mb-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
              />
            </div>
           
            <div className="mb-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                {...register("password", { required: true, maxLength: 20 })}
                placeholder="Enter Password"
              />
            </div>
            <Button>Login</Button>
          </form>
        </div>
      </div>
      <p className="py-3 text-center text-base font-bold text-black">or</p>
      <Button className="text-black bg-white border border-black hover:text-white mb-5">Continue With Google</Button>
      <Button className="text-black bg-white border border-black hover:text-white ">Continue With Apple</Button>
      <p className="text-base font-medium text-black mt-3 text-center">New to Zocdoc? <Link to="/signup"><strong className="text-blue-400 underline ml-2">Create an account</strong></Link></p>
    </div>
  );
};

export default UserLogin;