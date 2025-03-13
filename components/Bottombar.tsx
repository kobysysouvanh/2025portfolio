"use client"
import useButtonColor from "@/hooks/useButtonColor";
import { SocialIcon } from "react-social-icons";

const Bottombar = () => {
  const buttonColor = useButtonColor()
  return (
    <div className="sticky bottom-0 border-t border-zinc-600 flex justify-between items-center p-2">
      <p className="text-center w-full">Made with ❤️ by Koby Sysouvanh</p>
      <div className="hidden md:inline-flex justify-end items-center ml-auto gap-2 absolute right-2">
        <SocialIcon
          className="hover:scale-125 transition duration-500"
          style={{ width: 50, height: 50}}
          bgColor="none"
          url="https://www.linkedin.com/in/kobysysouvanh/"
        />
        <SocialIcon
          className="hover:scale-125 transition duration-500"
          style={{ width: 50, height: 50}}
          bgColor="transparent"
          url="https://github.com/kobysysouvanh"
        />
        <button className={`flex border border-zinc-600 rounded w-full justify-center cursor-pointer p-1  ${buttonColor.text} ${buttonColor.border} ${buttonColor.background} transition duration-500`}>
          contact me
        </button>
      </div>
    </div>
  );
};
export default Bottombar;
