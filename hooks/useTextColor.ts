import { usePathname } from "next/navigation";

const useTextColor = () => {
  const pathname = usePathname();

  // Define text colors based on pathname
  const textColors: { [key: string]: string } = {
    "/": "text-green-500",
    "/about": "text-blue-500",
    "/skills": "text-yellow-500",
    "/projects": "text-red-500",
    "/contact": "text-teal-500",
  };

  return textColors[pathname] || "text-white";
};

export default useTextColor;