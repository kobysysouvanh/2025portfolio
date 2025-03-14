import React, { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  background?: string;
  border?: string;
  borderTag?: string;
  textColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, background, border, textColor, borderTag }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div
        className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500 border text-sm rounded p-1 ${background} ${border} ${textColor} group-hover:animate-springIn`}
      >
        <div className="relative">
          <div
            className={`absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent ${borderTag}`}
          ></div>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;