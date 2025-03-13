import { usePathname } from "next/navigation";

const useButtonColor = () => {
  const pathname = usePathname();

  // Define button colors based on pathname
  const buttonColors: { [key: string]: { border: string; text: string; background: string } } = {
    "/": { border: "hover:border-green-500", text: "hover:text-green-500", background: "hover:bg-green-600/20" },
    "/about": { border: "hover:border-blue-500", text: "hover:text-blue-500", background: "hover:bg-blue-600/20" },
    "/skills": { border: "hover:border-yellow-500", text: "hover:text-yellow-500", background: "hover:bg-yellow-600/20" },
    "/projects": { border: "hover:border-red-500", text: "hover:text-red-500", background: "hover:bg-red-600/20" },
    "/contact": { border: "hover:border-teal-500", text: "hover:text-teal-500", background: "hover:bg-teal-600/20" },
  };

  return buttonColors[pathname];
};

export default useButtonColor;