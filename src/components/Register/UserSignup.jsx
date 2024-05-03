import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="usersignup page w-1/2 mx-auto h-full">
      <div className="mt-[15%]">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input"
              />
            </div>
            <div className=" gap-1 md:flex">
              <div className="mb-2 md:w-1/2 w-full">
                <Label htmlFor="fname">First Name</Label>
                <Input
                  type="text"
                  {...register("fname", { required: true, maxLength: 20 })}
                  placeholder="Enter your First Name"
                  className="input"
                />
              </div>
              <div className="mb-2 md:w-1/2 w-full">
                <Label htmlFor="lname"> Last Name</Label>
                <Input
                  type="text"
                  {...register("lname", { required: true, maxLength: 20 })}
                  placeholder="Enter your Last Name"
                  className="input"
                />
              </div>
            </div>
            <div className="mb-2">
              <Label htmlFor="doctorType">Doctor Type</Label>
              <select {...register("doctortyle")} className="block w-full border py-2 px-1 rounded text-sm text-[#64748B]">
                <option value="Eye Doctor" selected disabled>Popular specialties</option>
                <option value="Eye Doctor" className="text-sm text-[#64748B]">Eye Doctor</option>
                <option value="Heart Doctor" className="text-sm text-[#64748B]">Heart Doctor</option>
                <option value="Primary Care Physician" className="text-sm text-[#64748B]">Primary Care Physician</option>
              </select>
            </div>
            <div className="mb-2">
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                {...register("location", { required: true, maxLength: 20 })}
                placeholder="Enter your Location"
                className="input"
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                {...register("password", { required: true, maxLength: 20 })}
                placeholder="Enter Password"
                className="input"
              />
            </div>
            <Button className="button">Sign up</Button>
          </form>
        </div>
      </div>

      <p className="py-3 text-center text-base font-bold text-black">or</p>
      <Button className="text-black bg-white border border-black hover:text-white mb-5">
        Continue With Google
      </Button>
      <Button className="text-black bg-white border border-black hover:text-white ">
        Continue With Apple
      </Button>
      <p className="text-base font-medium text-black mt-3 text-center">
        Already have an account?
        <Link to="/login">
          <strong className="text-blue-400 underline ml-2">Login</strong>
        </Link>
      </p>
    </div>
  );
};

export default UserSignup;
