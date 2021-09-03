import React from "react";
import Link from "next/link";
import { togglehandler } from "../features/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

function Slidebar() {
  const dispatch = useDispatch();
  const is_open = useSelector((state) => state.sidebar.is_open);
  return (
    <div
      className={`${
        !is_open && "hidden"
      } h-full fixed top-0 left-0 z-20 bg-white w-3/5 sm:w-1/2 md:w-1/4 overflow-y-auto`}
    >
      <header className="flex items-center justify-between p-2 py-4 shadow-md bg-white">
        <div className="text-xl font-bold mx-2">
          <Link href="/">Market Place</Link>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => dispatch(togglehandler())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2 text-gray-600 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </header>
    </div>
  );
}

export default Slidebar;
