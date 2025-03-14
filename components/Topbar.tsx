"use client"

import useTextColor from "@/hooks/useTextColor"


const Topbar = () => {
  const textColor = useTextColor()

  return (
    <div className="bg-black/40 w-full flex justify-center items-center border-b border-zinc-600 py-2 text-lg sticky top-0">
        <p>koby</p>
        <p className={`${textColor} transition duration-500`}>&lt;sysouvanh&gt;</p>
    </div>
  )
}
export default Topbar