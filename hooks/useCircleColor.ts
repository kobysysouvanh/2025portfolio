import { usePathname } from "next/navigation";

const useCircleColor = () => {
  const pathname = usePathname();

  // Define text colors based on pathname
  const circleColor: { [key: string]: string } = {
    "/": "bg-green-400",
    "/about": "bg-blue-400",
    "/skills": "bg-yellow-400",
    "/projects": "bg-red-400",
    "/contact": "bg-teal-400",
  };

  if (pathname.startsWith("/projects")) {
    return circleColor["/projects"];
  }

  return circleColor[pathname] || circleColor["/"]; // Default color if no match found
};

export default useCircleColor;