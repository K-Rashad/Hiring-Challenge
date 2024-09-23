import { useEffect, useState } from "react";
import Button from "../components/buttonComponent";
import { TopMainSvgLarge } from "../../public/images/topMainLarge";
import axios from "axios";
import PersonalComp from "../components/personalComp";
import Footer from "../components/footer";
import { AsyncImage } from "loadable-image";

export type Person = {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female";
  status: "active" | "inactive";
};

export default function MainPage() {
  const [personData, setPersonData] = useState<Person[]>();

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((res) => {
        console.log(res.data);
        setPersonData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center font-graphik w-full">
      <div className="mt-16 flex gap-32 flex-col items-center text-center w-screen">
        <div className="flex flex-col gap-10">
          <div className="font-semibold text-[35px] xs:text-[45px] sm:text-[50px] md:text-[55px] lg:text-[60px] leading-tight text-center">
            Stay close to your
            <span className="text-mainViolet">
              <br />
              favorite people.
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            <input
              type="text"
              className="border py-6 xs:py-7 rounded-full w-[23rem] xs:w-[28rem] sm:w-[30rem] md:w-[32rem] lg:w-[36rem]  pl-10 outline-none focus:border-mainDark text-xl placeholder:text-sm placeholder:xs:text-base placeholder:text-slate-500 "
              placeholder="Enter your phone number"
            />
            <Button
              buttonDialogue="Get started"
              isBlack={true}
              additionClassName="font-semibold py-5 xs:py-6 xs:px-12 rounded-full -ml-48 text-base hover:bg-slate-800 hover:bg-slate-800 active:bg-slate-700 active:shadow-inner active:shadow-mainDark px-6 -ml-[143px] xs:-ml-[190px]"
            />
          </div>
        </div>

        <div className="flex justify-center ml-14 gap-5">
          <TopMainSvgLarge className="w-full h-full -mt-20" />
        </div>
        {/* Smiling Lady Below */}
        <div className=" bg-white flex lg:flex-row w-4/5 flex-col ">
          <div className="flex-1">
            <div className="flex gap-8 flex-col">
              <div className="text-[40px] xs:text-[45px] sm:text-[50px] xl:text-[55px] font-semibold leading-[60px] text-start">
                <img src="images/smiling.svg" alt="" className="mb-7" />
                Express yourself{" "}
                <span>
                  <br />
                  freely
                </span>
              </div>
              <div className=" text-[18px]  tracking-widest flex flex-col gap-5 text-start">
                <div className="leading-8 text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="tracking-tight text-mainViolet hover:cursor-pointer group text-start">
                  Learn more{" "}
                  <span className="group-hover:ml-3 transition-all duration-200">
                    ➞
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <span className="hidden sm:block">
              <AsyncImage
                src="images/lady.svg"
                style={{ width: 560, height: 440 }}
                loader={<div className="skeleton"></div>}
                error={<div style={{ background: "#eee" }} />}
                loading="lazy"
              />
            </span>
            <span className="sm:hidden">
              <AsyncImage
                src="images/lady.svg"
                style={{ width: 400, height: 300 }}
                loader={<div className="skeleton"></div>}
                error={<div style={{ background: "#eee" }} />}
                loading="lazy"
              />
            </span>
          </div>
        </div>
        {/* phone */}
        <div className=" bg-white flex lg:flex-row flex-col-reverse w-4/5 gap-5 justify-center ">
          <div className="flex-1 flex justify-center">
            <AsyncImage
              src="images/phoneMain.svg"
              style={{ width: 260, height: 500 }}
              loader={<div className="rounded-3xl skeleton"></div>}
              error={<div style={{ background: "#eee" }} />}
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <div className="flex gap-8 flex-col">
              <div className="text-[40px] xs:text-[45px] sm:text-[50px] xl:text-[55px] font-semibold leading-[70px] text-start ">
                <img src="images/radioIcon.svg" alt="" className="mb-7" />
                Create and{" "}
                <span>
                  <br />
                  Share
                </span>
              </div>
              <div className=" text-[18px]  tracking-widest flex flex-col gap-5 text-start">
                <div className="leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="tracking-tight text-mainViolet hover:cursor-pointer group">
                  Learn more{" "}
                  <span className="group-hover:ml-3 transition-all duration-200">
                    ➞
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* man looking at a phone! */}
        <div className=" bg-white flex lg:flex-row flex-col w-4/5">
          <div className="flex-1">
            <div className="flex gap-8 flex-col">
              <div className="text-[40px] xs:text-[45px] sm:text-[50px] xl:text-[55px] font-semibold leading-[70px] text-start ">
                <img src="images/location.svg" alt="" className="mb-7" />
                Share live{" "}
                <span>
                  <br />
                  location
                </span>
              </div>
              <div className=" text-[18px] lg:pr-16  tracking-widest flex flex-col gap-5">
                <div className="leading-8 text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="tracking-tight text-mainViolet hover:cursor-pointer group text-start">
                  Learn more{" "}
                  <span className="group-hover:ml-3 transition-all duration-200">
                    ➞
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full overflow-hidden">
            <span className="hidden sm:block">
              <AsyncImage
                src="images/manHoldingPhone.jpg"
                style={{ width: 540, height: 490 }}
                loader={<div className="skeleton "></div>}
                error={<div style={{ background: "#eee" }} />}
                loading="lazy"
              />
            </span>
            <span className="sm:hidden">
              <AsyncImage
                src="images/manHoldingPhone.svg"
                style={{ width: 320, height: 300 }}
                loader={<div className="skeleton"></div>}
                error={<div style={{ background: "#eee" }} />}
                loading="lazy"
              />
            </span>
          </div>
        </div>
        {/* The carousel begins */}
        <div className="h-[700px] bg-rose-50 w-full flex flex-col justify-center">
          <div className="flex  flex-col gap-4">
            <div className="text-[38px] sm:text-[50px] md:text-[55px] font-semibold text-center">
              Around 5M+ creators
            </div>
            <div className="text-[14px] sm:text-[16px] md:text-[18px] leading-8 tracking-wide text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              <span>
                <br />
                elit, sed do eiusmod tempor incididunt ut la
              </span>
            </div>
          </div>

          <div className="max-w-screen-2xl  overflow-hidden scroller  mx-auto">
            <div className="flex py-10 gap-4 flex-nowrap scroller_inner">
              {personData?.map((person, index) => {
                return (
                  <PersonalComp
                    status={person.status}
                    gender={person.gender}
                    key={index}
                    name={person.name}
                  />
                );
              })}
              {personData?.map((person, index) => {
                return (
                  <PersonalComp
                    status={person.status}
                    gender={person.gender}
                    key={index}
                    name={person.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
