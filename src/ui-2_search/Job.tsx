import React, { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({
  title,
  icon,
  bgClass: bgColor,
}: JobProps) => {
  return (
    <button
      className={`${bgColor} flex aspect-square flex-col items-center justify-center rounded-md p-4`}
    >
      {icon}
      <p className="pt-2 font-poppins">{title}</p>
    </button>
  );
};
