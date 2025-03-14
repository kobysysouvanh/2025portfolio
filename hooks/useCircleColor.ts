import { usePathname } from "next/navigation";

const useCircleColor = () => {
  const pathname = usePathname();

  // Define text colors based on pathname
  const textColors: { [key: string]: string } = {
    "/": "bg-green-500",
    "/about": "bg-blue-500",
    "/skills": "bg-yellow-500",
    "/projects": "bg-red-500",
    "/contact": "bg-teal-500",
  };

  return textColors[pathname] || "text-white";
};

export default useCircleColor;