import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";
import card5 from "../../assets/card5.svg";
import doctor from "../../assets/doctor.png";

const HomePage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" homepage ">
      <div className="bg-[#D6E5F3]">
        <div className=" h-full lg:h-[500px]  mx-auto max-w-screen-2xl">
          <div className="w-full text-center pt-10 md:pt-14 lg:pt-[130px] mb-5 ">
            <h1 className="text-lg sm:text-xl md:text-[40px] font-bold text-[#333333] mb-3 md:mb-4 lg:mb-7 ">
              Book the best Doctors near me
            </h1>
            <p className="text-[12px] md:text-sm lg:text-base font-normal text-[#333333] w-8/12 mx-auto sm:mb-8 md:mb-14 lg:mb-20">
              Need to make a pri40pxmary care doctor appointment this week? Use
              Zocdoc to find doctors near you who take your insurance. It’s
              simple, secure and free.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className="md:flex w-full justify-center items-center
         bg-white py-2 md:py-5 px-5  md:px-5 gap-1 md:gap-2 rounded  mt-5 mb-10 lg:mt-10   "
            >
              <div className=" w-full mb-2">
                <Label htmlFor="Search">Search</Label>
                <select
                  {...register("Search")}
                  className="block w-full  md:border-r py-2 px-1  text-sm text-[#64748B]"
                >
                  <option value="Eye Doctor" selected disabled>
                    Popular specialties
                  </option>
                  <option value="Eye Doctor" className="text-sm text-[#64748B]">
                    Eye Doctor
                  </option>
                  <option
                    value="Heart Doctor"
                    className="text-sm text-[#64748B]"
                  >
                    Heart Doctor
                  </option>
                  <option
                    value="Primary Care Physician"
                    className="text-sm text-[#64748B]"
                  >
                    Primary Care Physician
                  </option>
                </select>
              </div>
              <div className=" w-full mb-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  type="text"
                  {...register("location", { required: true, maxLength: 20 })}
                  placeholder="Enter your Location"
                  className="input"
                />
              </div>
              <div className=" w-full ">
                <Label htmlFor="doctorType">Insurance</Label>
                <select
                  {...register("insurance")}
                  className="block w-full  md:border-l py-2 px-1  text-sm text-[#64748B]"
                >
                  <option value="Eye Doctor" selected disabled>
                    Insurance carrier and plan
                  </option>
                  <option
                    value="I'm paying for mysel"
                    className="text-sm text-[#64748B]"
                  >
                    I&apos;m paying for myself
                  </option>
                  <option
                    value=" I'll choose my insurance later"
                    className="text-sm text-[#64748B]"
                  >
                    I&apos;ll choose my insurance later
                  </option>
                  <option value=" Aetna" className="text-sm text-[#64748B]">
                    Aetna
                  </option>
                </select>
              </div>
              <Button>Search</Button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-5 lg:px-0">
        <div className="pt-3 md:pt-5 pb-5 md:pb-8">
          <h2 className=" text-lg md:text-xl lg:text-2xl font-semibold text-[#333333] mb-2 md:mb-3">
            Find an in-network doctor from over 1,000 insurance plans
          </h2>
          <p className="sm:text-[12px] md:text-sm text-base font-normal text-[#333333]">
            Add your insurance to see in-network doctors
          </p>
        </div>
        <div className="flex flex-wrap md:gap-2 items-center gap-2 lg:gap-3 ">
          <div className="border p-9 rounded-lg mb-2 w-full md:w-[190px] min-h-[115px]">
            <img src={card1} alt="" />
          </div>
          <div className="border p-9 rounded-lg mb-2 w-full md:w-[190px]  min-h-[115px]">
            <img src={card2} alt="" />
          </div>
          <div className="border p-9 rounded-lg mb-2 w-full md:w-[190px]  min-h-[115px]">
            <img src={card3} alt="" />
          </div>
          <div className="border p-9 rounded-lg mb-2 w-full md:w-[190px]  min-h-[115px]">
            <img src={card4} alt="" />
          </div>
          <div className="border p-9 rounded-lg w-full md:w-[190px] mb-2  min-h-[115px]">
            <img src={card5} alt="" />
          </div>
          <p className="text-[12px] underline ml-4 md:ml-7 lg:ml-[45px] text-base font-medium text-[#333333]">
            See all(1000+)
          </p>
        </div>
        <Button className=" mt-3 md:mt-6 mb-3 md:mb-6 py-5 px-7 bg-white text-black border  sm:text-base md:text-lg border-black hover:text-white ">
          Add your insurance coverage
        </Button>
        <div className=" mt-[20px] md:mt-[30px] lg:mt-[50px] mb-3 md:mb-4 lg:mb-5">
          <h3 className="text-lg md:text-xl lg:text-2xl text-[#333333] font-semibold mb-2 md:mb-3">
            {" "}
            16 verified Doctors in your area
          </h3>
          <p className="text-[12px] md:text-sm lg:text-base text-[#757575] font-normal mb-1 md:mb-2 ">
            Zocdoc verifies all providers before they can appear in Zocdoc
            search results. Every provider that appears in search is open to new
            patients.
          </p>
          <p className="text-[#4EAEF5] text-[12px] md:text-sm lg:text-base font-semibold underline ">
            Learn more about Zocdoc search
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center px-10 ">
            <h4 className="text-base md:text-lg lg:text-xl font-semibold text-[#333333] ">
              All providers
            </h4>
            <p className="text-[12px] md:text-sm lg:text-base font-normal text-[#757575]">
              Availability last updated 05/03/2024
            </p>
          </div>
        </div>
        <div className="border-t border-[#ADADAD] py-2  mt-5 ">
          <div className="lg:flex px-3 md:px-7 lg:px-10 gap-2 md:gap-3 mt-4 md:mt-6 mb-4 lg:mt-10">
            <div className="flex gap-2 md:gap-4 lg:w-8/12 w-full">
              <div>
                <img
                  className="md:w-[140px] w-[120px] h-[120x] md:h-[120px] rounded-full"
                  src={doctor}
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h5 className="text-base md:text-lg lg:text-xl font-semibold text-[#333333] hover:underline">
                    Dr. John Griffin, MD
                  </h5>
                  <Button className="border uppercase bg-white border-black text-black hover:text-white text-sm">
                    Video visit
                  </Button>
                </div>
                <p className="text-[12px] md:text-sm lg:text-base font-semibold text-[#333333]">
                  Internist
                </p>
                <p className="text-[#B8B9B8] text-sm md:text-base lg:text-lg font-medium mb-1 md:mb-2">
                  Mt Chase, ME
                </p>
                <p className="text-[#B8B9B8] text-[12px] md:text-sm lg:text-base font-normal mb-1 md:mb-2">
                  <strong className="text-black">4.69</strong> 770 verified
                  reviews
                </p>
                <p className="text-black text-[12px] md:text-sm lg:text-base font-normal mb-1 md:mb-2">
                  BlueCross BlueShield, Medicare{" "}
                  <strong className="text-black font-semibold underline">
                    see more
                  </strong>
                </p>
                <p className="text-[#B8B9B8] text-[12px] md:text-sm lg:text-base font-normal mb-1 md:mb-2">
                  John Griffin, MD, is an ABIM board-certified Internal Medicine
                  Physician at Genesis in Westfield, New Jersey. Dr. Griffin
                  delivers excellence in the care of Telehealth patients with a
                  broad range of conditions
                  <strong className="text-black font-semibold underline">
                    {" "}
                    ...see more
                  </strong>
                </p>
                <h6 className="text-[#333333] text-sm md:text-bsae lg:text-lg font-medium py-1 md:py-2">
                  Recent Patient Review
                </h6>
                <p className="text-[#333333] text-[12px] md:text-sm lg:text-base font-normal mb-1 md:mb-2">
                  Great first experience, very helpful and informative. Will be
                  back!
                </p>
              </div>
            </div>
            <div className="lg:w-4/12 w-full mx-auto lg:mx-0 mt-5 lg:mt-0">
              <Button className="w-full border border-black text-black py-2 md:py-3  px-20 bg-white hover:text-white ">
                View Profile & reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
