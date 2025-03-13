"use client";
import useSelectionStyles from "@/hooks/useSelectionStyles";

const SelectionStyles = () => {
  const selectionStyle = useSelectionStyles();

  return (
    <style jsx global>{`
      ::selection {
        background-color: ${selectionStyle};
        color: black;
      }
    `}</style>
  );
};

export default SelectionStyles;