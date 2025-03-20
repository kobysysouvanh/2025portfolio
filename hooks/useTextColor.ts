import { usePathname } from "next/navigation";

const useTextColor = () => {
  const pathname = usePathname();

  // Define text colors based on pathname
  const textColors: { [key: string]: string } = {
    "/": "text-green-400",
    "/about": "text-blue-400",
    "/skills": "text-yellow-400",
    "/projects": "text-red-400",
    "/contact": "text-teal-400",
  };

  if (pathname.startsWith("/projects")) {
    return textColors["/projects"];
  }

  return textColors[pathname] || "text-white";
};

export default useTextColor;