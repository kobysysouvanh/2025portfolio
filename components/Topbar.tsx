"use client"

import useTextColor from "@/hooks/useTextColor"
import { useState } from "react"
import { MenuButton } from "./MenuButton"
import MobileMenu from "./MobileMenu"


const Topbar = () => {
  const textColor = useTextColor()
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-black/40 w-full flex justify-center items-center border-b border-zinc-600 py-2 text-lg sticky top-0">
          <MobileMenu isOpen={isOpen} closeMenu={closeMenu}/>
        <p>Koby</p>
        <p className={`${textColor} transition duration-500`}>&lt;Sysouvanh/&gt;</p>
        <div className="md:hidden absolute right-5 z-[1000]">
          <MenuButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          />
        </div>
    </div>
  )
}
export default Topbar