import React from "react";
import { Menu } from "@headlessui/react";

function Nav({
  users,
  search,
  setSearch,
  filterAll,
  filterPaid,
  filterUnPaid,
  filterOverDue,
}) {
  const amount = users
    .filter((e) => e.paymentStatus == "unpaid" || "overdue")
    .map((i) => i.amountInCents);
  const sum = amount.reduce((a, b) => a + b, 0) / 100;

  return (
    <>
      <div className="flex justify-between border-b-2 border-[#C6C2DE]">
        <div className="flex space-x-8 capitalize">
          <p
            onClick={filterAll}
            className="text-[14px] text-[#6E6893] font-light 
              cursor-pointer hover:border-b-2 border-[#25213B] hover:text-[#25213B]"
          >
            all
          </p>

          <p
            onClick={filterPaid}
            className="text-[14px] text-[#6E6893] font-light 
              cursor-pointer hover:border-b-2 border-[#25213B] hover:text-[#25213B]"
          >
            paid
          </p>
          <p
            onClick={filterUnPaid}
            className="text-[14px] text-[#6E6893] font-light 
              cursor-pointer hover:border-b-2 border-[#25213B] hover:text-[#25213B]"
          >
            unpaid
          </p>
          <p
            onClick={filterOverDue}
            className="text-[14px] text-[#6E6893] font-light 
              cursor-pointer hover:border-b-2 border-[#25213B] hover:text-[#25213B]"
          >
            overdue
          </p>
        </div>

        <div>
          <p className="text-[14px] text-[#6E6893]">
            Total payable amount:{" "}
            <span className="text-[#6D5BD0] font-extrabold">${sum}</span> USD
          </p>
        </div>
      </div>
      <div className="mt-3 py-2 bg-[#FFFFFF]">
        <div className="flex px-5 mb-3 text-[14px] justify-between">
          <div className="flex items-center justify-center space-x-6">
            <Menu as="div" className="relative">
              <Menu.Button className="text-[#25213B] w-20 flex items-center justify-between py-2 px-3 cursor-pointer bg-[#ffffff] border-2 rounded-[6px] tracking-wider hover:border-[1px] hover:border-[#6D5BD0]">
                <svg
                  className="w-4 h-4"
                  fill="#8B83BA"
                  stroke="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filter
              </Menu.Button>
              <Menu.Items className="absolute w-48 bg-[#ffffff] mt-1 p-5 rounded-[6px]">
                <p className="text-[#6E6893] text-[12px] mb-3 font-[300] tracking-wider uppercase">
                  sort by:
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between cursor-pointer items-center hover:bg-[#F2F0F9] py-1 px-2 rounded-[6px]">
                    <p className="text-[#25213B] text-[14px] font-[300] capitalize tracking-wider">
                      first name
                    </p>
                    <span className="h-3 w-3 rounded-full border-[1px] border-[#8B83BA]"></span>
                  </div>
                  <div className="flex justify-between cursor-pointer items-center hover:bg-[#F2F0F9] p-1 px-2 rounded-[6px]">
                    <p className="text-[#25213B] text-[14px] font-[300] capitalize tracking-wider">
                      last name
                    </p>
                    <span className="h-3 w-3 rounded-full border-[1px] border-[#8B83BA]"></span>
                  </div>
                  <div className="flex justify-between cursor-pointer items-center hover:bg-[#F2F0F9] p-1 px-2 rounded-[6px]">
                    <p className="text-[#25213B] text-[14px] font-[300] capitalize tracking-wider">
                      email
                    </p>
                    <span className="h-3 w-3 rounded-full border-[1px] border-[#8B83BA]"></span>
                  </div>
                </div>
              </Menu.Items>
            </Menu>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-[40px] focus:outline-none hover:border-[#6D5BD0] hover:border-[1px] rounded-[6px] w-[392px] px-2 bg-[#F4F2FF] "
              placeholder="Search Users by Name, Email, or Date "
            />
          </div>
          <div className="py-2 px-3 cursor-pointer rounded-[6px] bg-[#6D5BD0] text-[#ffffff]">
            Pay Due
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
