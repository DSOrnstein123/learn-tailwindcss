export const UserCard = () => {
  return (
    <div className="flex w-[36rem] gap-x-4 rounded-lg bg-white p-12">
      <img
        src="https://yt3.ggpht.com/M8IPS2ObJhaVcFC6h-VjnmyKjP_uTvtIHDLpyCqojwdWDcoOozTKUbVG0-VyIJJUz68X5zEToA=s88-c-k-c0x00ffffff-no-rj"
        alt=""
        className="w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
      />

      <div className="space-y-6 text-[#1C2862]">
        <div>
          <div className="font-poppins mb-1 text-[26px] font-bold">Grimm</div>
          <div className="font-medium">Master of the Grimm Troupe</div>
        </div>

        <div className="space-y-4">
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            4.7 Ratings
          </p>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            4,215 Reviews
          </p>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            439 Students
          </p>
        </div>

        <p className="text-[18px]">
          Grimm and his Troupe travel from the Nightmare Realm to wherever the
          Nightmare Lantern has been lit by acolytes. They gather Nightmare
          Flames from ruined lands to fuel the sinister being enslaving the
          Troupe, the Nightmare's Heart.
        </p>

        <button className="rounded-md border-2 border-[#C4CADF] p-2">
          Show more
        </button>
      </div>
    </div>
  );
};
