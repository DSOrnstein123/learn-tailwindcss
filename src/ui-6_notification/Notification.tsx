import { useState } from "react";

export const Notification = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[44rem]">
      <div className="flex justify-end">
        <button
          className="flex size-20 items-center justify-center rounded-full bg-[#0C0E41]"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-11 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
      </div>

      <div
        className={`mt-3 w-full rounded-lg bg-white p-10 opacity-0 transition-all duration-500 ${show && "opacity-100"}`}
      >
        <p className="font-poppins text-[22px] font-semibold text-[#0C0E41]">
          You have 1 new message
        </p>

        <div className="mt-6 flex gap-4">
          <div className="flex size-[88px] items-center justify-center rounded-md bg-[#FFE9F2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-11 text-[#C83974]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-poppins font-semibold text-[#0C0E41]">Feb 22</p>
            <p className="font-poppins text-lg text-[#0C0E41]">
              If you like what we do, please tell your friends and share.
            </p>
          </div>
        </div>

        <div className="mt-7 flex justify-center gap-3">
          <button className="flex items-center gap-1 rounded-3xl border-[1px] border-blue-300 px-3 py-2">
            <svg
              className="h-6 w-6 text-blue-300 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="font-poppins text-lg font-semibold text-blue-300">
              Twitter
            </p>
          </button>

          <button className="flex items-center gap-1 rounded-3xl border-[1px] border-gray-800 px-3 py-2">
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="font-poppins text-lg font-semibold text-gray-800">
              Facebook
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};