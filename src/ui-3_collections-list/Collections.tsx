import c1_img1 from "../assets/ui-3/card-1/Rectangle 1.png";
import c1_img2 from "../assets/ui-3/card-1/Rectangle 2.png";
import c1_img3 from "../assets/ui-3/card-1/Rectangle 3.png";
import c1_img4 from "../assets/ui-3/card-1/Rectangle 4.png";

import c2_img1 from "../assets/ui-3/card-2/Rectangle 1.png";
import c2_img2 from "../assets/ui-3/card-2/Rectangle 2.png";
import c2_img3 from "../assets/ui-3/card-2/Rectangle 3.png";
import c2_img4 from "../assets/ui-3/card-2/Rectangle 4.png";

import c3_img1 from "../assets/ui-3/card-3/Rectangle 1.png";
import c3_img2 from "../assets/ui-3/card-3/Rectangle 2.png";
import c3_img3 from "../assets/ui-3/card-3/Rectangle 3.png";
import c3_img4 from "../assets/ui-3/card-3/Rectangle 4.png";

export const Collections = () => {
  const tags: string[] = [
    "Profile",
    "New York",
    "Relaxing",
    "Person",
    "Fashion",
  ];

  return (
    <div className="m-4 w-full rounded-3xl bg-[#EFF0F1] p-16">
      <div className="mb-6 font-merriweather text-4xl font-bold">
        Popular collections
      </div>

      <div className="mb-14 space-x-2">
        {tags.map((tag) => (
          <a className="mb-2 inline-block cursor-pointer rounded-lg bg-white p-[10px]">
            {tag}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 gap-x-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6">
          <div>
            <img className="mb-4 w-full rounded-lg" src={c1_img1} alt="" />
          </div>

          <div className="mb-6 grid grid-cols-3 gap-4">
            <img className="w-full" src={c1_img2} alt="" />
            <img className="w-full" src={c1_img3} alt="" />
            <img className="w-full" src={c1_img4} alt="" />
          </div>

          <div className="flex items-center">
            <p className="grow font-poppins text-2xl font-medium">People</p>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-1 size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="font-poppins font-medium">44</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6">
          <div>
            <img className="mb-4 w-full rounded-lg" src={c2_img1} alt="" />
          </div>

          <div className="mb-6 grid grid-cols-3 gap-4">
            <img className="w-full" src={c2_img2} alt="" />
            <img className="w-full" src={c2_img3} alt="" />
            <img className="w-full" src={c2_img4} alt="" />
          </div>

          <div className="flex items-center">
            <p className="grow font-poppins text-2xl font-medium">Nature</p>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-1 size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="font-poppins font-medium">7K</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6">
          <div>
            <img className="mb-4 w-full rounded-lg" src={c3_img1} alt="" />
          </div>

          <div className="mb-6 grid grid-cols-3 gap-4">
            <img className="w-full" src={c3_img2} alt="" />
            <img className="w-full" src={c3_img3} alt="" />
            <img className="w-full" src={c3_img4} alt="" />
          </div>

          <div className="flex items-center">
            <p className="grow font-poppins text-2xl font-medium">History</p>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-1 size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="font-poppins font-medium">459</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
