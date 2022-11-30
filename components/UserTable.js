import React from "react";

function Table({ user }) {
  
  return (
    <>
      <details>
        <summary className="list-none">
          <div className="bg-[#ffffff] flex justify-between border-[#D9D5EC] border-y-[1px]">
            <div className="px-5 py-4 w-24">
              <div className="flex space-x-6 items-center">
                <div className="w-4 h-4 border-[1px] border-[#8B83BA] rounded-[3px]"></div>
                <div className="w-4 h-4 text-center border-[1px] border-[#8B83BA] rounded-full">
                  <svg
                    className="w-4 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-5 py-4 w-36 text-[12px] font-[500]">
              <p className="text-[#25213B]">
                {user.firstName} {user.lastName}
              </p>
              <span className="text-[#6E6893]">e{user.email}</span>
            </div>
            <div className="px-5 py-4 w-96 text-[12px] font-[500]">
              {user.userStatus === "active" ? (
                <p className=" bg-[#E6E6F2] w-20 rounded-full flex items-center justify-around">
                  <span className="w-2 h-2 bg-[#4A4AFF] rounded-full"></span>
                  <span className="capitalize text-[#4A4AFF] ">
                    {user.userStatus}
                  </span>
                </p>
              ) : (
                <p className=" bg-[#F2F0F9] w-20 rounded-full flex items-center justify-around">
                  <span className="w-2 h-2 bg-[#6E6893] rounded-full"></span>
                  <span className="capitalize text-[#6E6893] ">
                    {user.userStatus}
                  </span>
                </p>
              )}

              <span className="text-[#6E6893]">
                Last login: {user.lastLogin}
              </span>
            </div>
            <div className="px-5 py-4 w-60 text-[12px] font-[500]">
              {user.paymentStatus === "paid" ? (
                <p className=" bg-[#CDFFCD] w-16 rounded-full flex items-center justify-around">
                  <span className="w-2 h-2 bg-[#007F00] rounded-full"></span>
                  <span className="capitalize text-[#007F00] ">
                    {user.paymentStatus}
                  </span>
                </p>
              ) : user.paymentStatus === "unpaid" ? (
                <p className=" bg-[#FFECCC] w-16 rounded-full flex items-center justify-around">
                  <span className="w-2 h-2 bg-[#CE8500] rounded-full"></span>
                  <span className="capitalize text-[#965E00] ">
                    {user.paymentStatus}
                  </span>
                </p>
              ) : (
                <p className=" bg-[#FFE0E0] w-16 rounded-full flex items-center justify-around">
                  <span className="w-2 h-2 bg-[#D30000] rounded-full"></span>
                  <span className="capitalize text-[#D30000] ">
                    {user.paymentStatus}
                  </span>
                </p>
              )}

              <span className="text-[#25213B]">Paid on: {user.paidOn}</span>
            </div>
            <div className="px-5 py-4 w-44 text-[12px] font-[500]">
              <div className="flex space-x-6 items-center">
                <div>
                  <p className="text-[#25213B]">${user.amountInCents / 100}</p>
                  <span className="text-[#6E6893]">USD</span>
                </div>
                <p className="capitalize text-[#6E6893] hover:text-[#6D5BD0] cursor-pointer">
                  view more
                </p>
              </div>
            </div>
            <div className="px-5 py-4 w-12 text-[12px] font-[500] text-[#8B83BA]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
          </div>
        </summary>
        <div>
          <div className="bg-[#F2F0F9] border-y-[1px] border-[#D9D5EC] text-[12px] text-[#6E6893] font-[600] uppercase">
            <div className="flex">
              <div className="px-12 py-3 w-24 tracking-wider text-left">
                date
              </div>
              <div className="px-12 py-3 w-72 tracking-wider text-left">
                user activity
              </div>
              <div className="px-12 py-3  tracking-wider text-left">detail</div>
            </div>
          </div>
          <div>
            {user.activities.map((p) => (
              <div key={p.date} className="bg-[#F4F2FF] flex">
                <div className="px-12 py-4 w-24 text-[14px] font-[300] text-[#6E6893]">
                  {p.date}
                </div>
                <div className="px-12 py-4 w-72 text-[14px] font-[300]">
                  <p className="text-[#25213B]">{p.userActivity}</p>
                </div>
                <div className="px-12 py-4 text-[14px] font-[300]">
                  <p className="text-[#25213B]">{p.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </details>
    </>
  );
}

export default Table;
