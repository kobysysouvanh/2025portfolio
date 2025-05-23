"use client"
import { usePathname } from "next/navigation";

const useSelectionStyles = () => {
  const pathname = usePathname();

  // Define selection styles based on pathname
  const selectionStyles: { [key: string]: string } = {
    "/": "oklch(0.723 0.219 149.579)",
    "/about": "oklch(0.623 0.214 259.815)",
    "/skills": "oklch(0.795 0.184 86.047)",
    "/projects": "oklch(0.637 0.237 25.331)",
    "/contact": "oklch(0.704 0.14 182.503)",
  };

  if (pathname.startsWith("/projects")) {
    return selectionStyles["/projects"];
  }

  return selectionStyles[pathname] || "oklch(0.723 0.219 149.579)"; // Default color if no match found
};

export default useSelectionStyles;