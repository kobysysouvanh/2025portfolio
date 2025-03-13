import Bottombar from "@/components/Bottombar";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SelectionStyles from "@/components/SelectionStyles";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koby Sysouvanh's Portfolio",
  description: "Web Portfolio for Koby Sysouvanh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased p-2 h-screen w-screen flex flex-col overflow-hidden`}
      >
        <SelectionStyles/>
        <div className="w-full h-full border border-zinc-600 rounded-md  flex flex-col overflow-hidden">
          <Topbar />
          <div className="flex h-full overflow-hidden">
            <Sidebar />
            <div className="flex w-full h-full">{children}</div>
          </div>
          <Bottombar />
        </div>
      </body>
    </html>
  );
}
