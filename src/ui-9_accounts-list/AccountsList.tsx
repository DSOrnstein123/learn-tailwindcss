import { ReactNode } from "react";

interface Account {
  name: string;
  accounts: number;
  icon: ReactNode;
}

const accounts: Account[] = [
  {
    name: "Dropbox",
    accounts: 24,
    icon: (
      <svg
        className="h-12 w-12 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="blue"
        viewBox="0 0 24 24"
      >
        <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
        <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
      </svg>
    ),
  },
  {
    name: "Apple",
    accounts: 3,
    icon: (
      <svg
        className="h-12 w-12 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    accounts: 13,
    icon: (
      <svg
        className="h-12 w-12 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#1DA1F2"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
];

export const AccountsList = () => {
  return (
    <div className="w-[60rem] rounded-3xl bg-white p-24">
      <div className="flex items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="mr-2 rounded-md border-2 border-gray-300 p-[10px] pl-10 text-[#281A51]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute left-3 size-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="ml-auto flex gap-8">
          <button className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-9 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>
          <button className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#8598FC]">
            <span className="font-poppins text-[36px] font-medium text-white">
              IG
            </span>
          </button>
        </div>
      </div>

      <h1 className="mt-4 font-merriweather text-[32px] font-bold text-[#0E0D46]">
        Accounts
      </h1>

      <div className="mt-4 flex w-full flex-col gap-1">
        {accounts.map((account) => {
          return (
            <div className="flex items-center justify-between rounded-lg p-5 transition duration-300 hover:bg-[#FAF2FE]">
              <div className="flex w-[220px] items-center gap-3">
                <div className="rounded-full bg-white p-[16px]">
                  {account.icon}
                </div>
                <div className="flex flex-col">
                  <p className="font-merriweather text-2xl font-bold text-[#0E0D46]">
                    {account.name}
                  </p>
                  <p className="font-merriweather font-medium text-[#0E0D46]">
                    {account.name}.com
                  </p>
                </div>
              </div>

              <div className="w-[85px]">{account.accounts} accounts</div>

              <button className="rounded-full bg-white p-2">
                <svg
                  className="h-6 w-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M6 12h.01m6 0h.01m5.99 0h.01"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
