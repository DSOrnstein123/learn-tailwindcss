import { User, UserProps } from "./User";

import avatar1 from "../assets/ui-5/Ellipse 1.png";
import avatar2 from "../assets/ui-5/Ellipse 2.png";
import avatar3 from "../assets/ui-5/Ellipse 3.png";
import avatar4 from "../assets/ui-5/Ellipse 4.png";
import avatar5 from "../assets/ui-5/Ellipse 5.png";
import avatar6 from "../assets/ui-5/Ellipse 6.png";
import { useState } from "react";

const users: UserProps[] = [
  {
    title: "Lelag Nichols",
    place: "Troy, MI",
    avatar: avatar1,
    tags: ["clothes", "stem"],
  },
  {
    title: "Jesus Weiss",
    place: "Fort Worth, TX",
    avatar: avatar2,
    tags: ["headset", "gadget", "speed", "winter"],
  },
  {
    title: "Annie Rice",
    place: "Austin, TX",
    avatar: avatar3,
    tags: ["road", "mountain", "trip", "earth", "nature"],
  },
  {
    title: "Robert Brower",
    place: "Cincinnati, OH",
    avatar: avatar4,
    tags: ["maintenance", "gears", "frames", "repair"],
  },
  {
    title: "Amy Campbell",
    place: "Warrior, AL",
    avatar: avatar5,
    tags: ["music", "disks"],
  },
  {
    title: "Anthony S.Morin",
    place: "Lyndhurst, NJ",
    avatar: avatar6,
    tags: ["vintage", "electric"],
  },
];

export const UserList = () => {
  const [query, setQuery] = useState("");

  const filters = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const filterUsers =
    query.length > 0
      ? users.filter((user) => {
          return user.title.toLowerCase().includes(query.toLowerCase());
        })
      : users;

  return (
    <div className="mx-2 my-3 min-w-[56rem] rounded-lg bg-white p-[100px]">
      <div>
        <p className="mb-4 font-merriweather text-[32px] font-black">Users</p>

        <div className="flex flex-col gap-x-1 gap-y-4 md:flex-row">
          <div className="relative flex grow items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="absolute left-3 size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search users"
              className="grow rounded-md border-2 py-3 pl-12 font-poppins font-medium"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center font-poppins font-medium">
            {filters.map((filter) => (
              <p className="whitespace-nowrap rounded-md px-2 py-3 hover:bg-[#849FFF] hover:text-white">
                {filter}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {filterUsers.map((user) => (
          <User
            title={user.title}
            place={user.place}
            avatar={user.avatar}
            tags={user.tags}
          />
        ))}
      </div>
    </div>
  );
};
