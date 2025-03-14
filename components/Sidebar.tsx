import { House, Laptop, Mail, UserRound, Zap } from "lucide-react";
import Tooltip from "./Tooltip";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="border-r bg-black/40 border-zinc-600 flex-col justify-center items-center sticky top-0 p-2 gap-4 md:inline-flex hidden">
      <Tooltip
        text="home"
        background="bg-green-950"
        border="border-green-500"
        textColor="text-green-500"
        borderTag="border-r-green-500"
      >
        <Link href={"/"}>
          <House
            size={20}
            className="text-zinc-600 cursor-pointer hover:text-green-500 transition duration-1000"
          />
        </Link>
      </Tooltip>
      <Tooltip
        text="about"
        background="bg-blue-950"
        border="border-blue-500"
        textColor="text-blue-500"
        borderTag="border-r-blue-500"
      >
        <Link href="/about">
          <UserRound
            size={20}
            className="text-zinc-600 cursor-pointer hover:text-blue-500 transition duration-1000"
          />
        </Link>
      </Tooltip>
      <Tooltip
        text="skills"
        background="bg-yellow-950"
        border="border-yellow-500"
        textColor="text-yellow-500"
        borderTag="border-r-yellow-500"
      >
        <Link href="/skills">
          <Zap
            size={20}
            className="text-zinc-600 cursor-pointer hover:text-yellow-500 transition duration-1000"
          />
        </Link>
      </Tooltip>
      <Tooltip
        text="projects"
        background="bg-red-950"
        border="border-red-500"
        textColor="text-red-500"
        borderTag="border-r-red-500"
      >
        <Link href="/projects">
          <Laptop
            size={20}
            className="text-zinc-600 cursor-pointer hover:text-red-500 transition duration-1000"
          />
        </Link>
      </Tooltip>

      <Tooltip
        text="contact"
        background="bg-teal-950"
        border="border-teal-500"
        textColor="text-teal-500"
        borderTag="border-r-teal-500"
      >
        <Link href="/contact">
          <Mail
            size={20}
            className="text-zinc-600 cursor-pointer hover:text-teal-500 transition duration-1000"
          />
        </Link>
      </Tooltip>
    </div>
  );
};
export default Sidebar;
