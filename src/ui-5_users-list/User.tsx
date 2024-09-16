import React from "react";

export interface UserProps {
  title: string;
  place: string;
  avatar: string;
  tags: string[];
}

export const User: React.FC<UserProps> = ({
  title,
  place,
  avatar,
  tags,
}: UserProps) => {
  return (
    <div className="flex rounded-md bg-gray-200 p-6 hover:border-[1px] hover:border-[#BFC8E5] hover:shadow-md">
      <img className="mr-3 self-start" src={avatar} alt="" />
      <div>
        <div className="font-merriweather text-lg font-black">{title}</div>

        <div className="font-poppins text-sm font-medium">{place}</div>

        <div className="mt-1 space-x-1 space-y-1 hover:cursor-pointer">
          {tags.map((tag) => (
            <div className="inline-block rounded-2xl border-2 border-gray-300 bg-white p-[6px] font-poppins text-[12px] font-medium text-[#516FD4]">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
