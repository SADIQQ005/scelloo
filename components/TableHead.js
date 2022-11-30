import React from "react";

function TableHead() {
  return (
    <div className="bg-[#F4F2FF] border-y-[1px] border-[#D9D5EC] text-[12px] text-[#6E6893] font-[600] uppercase">
      <div className="flex justify-between">
        <div className="px-5 py-3 tracking-wider w-24 text-left">
          <div className="w-4 h-4 border-[1px] border-[#8B83BA] rounded-[3px]"></div>
        </div>
        <div className="px-5 py-3 tracking-wider w-36 text-left">name</div>
        <div className="px-5 py-3 tracking-wider w-96 text-left">
          user status
        </div>
        <div className="px-5 py-3 tracking-wider w-60 text-left">
          payment status
        </div>
        <div className="px-5 py-3 tracking-wider w-44 text-left">amount</div>
        <div className="px-5 py-3 tracking-wider w-12 text-left">
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
    </div>
  );
}

export default TableHead;
