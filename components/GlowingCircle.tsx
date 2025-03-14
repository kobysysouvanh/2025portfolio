"use client";

import useCircleColor from "@/hooks/useCircleColor";
import React from "react";

const GlowingCircle = () => {
  const circleColor = useCircleColor();

  return (
    <>
      <div className="fixed top-[-192px] left-[-192px] z-[-10] ">
        <div
          className={`w-96 h-96 rounded-full ${circleColor} blur-[10rem] transition duration-500`}
        ></div>
      </div>
      <div className="fixed bottom-[-192px] right-[-192px] z-[-10] ">
        <div
          className={`w-96 h-96 rounded-full ${circleColor} blur-[10rem] transition duration-500`}
        ></div>
      </div>
    </>
  );
};

export default GlowingCircle;
