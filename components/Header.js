import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { togglehandler } from "../features/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

function Header() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const is_open = useSelector((state) => state.sidebar.is_open);
  const cart_products = useSelector((state) => state.cart.products);
  const [dropmenu, setDropmenu] = useState(false);
  const { locale } = useRouter();
  return (
    <header className="flex items-center justify-between p-2 shadow-xl bg-white">
      <div
        className="border-2 border-gray-100 rounded-md p-1 cursor-pointer mx-1 hover:border-gray-700"
        onClick={() => dispatch(togglehandler())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="flex-grow text-xl font-bold mx-2">
        <Link href="/">Market Place</Link>
      </div>
      <div className="hidden md:flex flex-grow items-center border-2 rounded-md">
        <input
          type="search"
          className="flex-grow p-2 focus:outline-none"
          placeholder={`${t("search")}...`}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 m-1 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="mx-1 ml-3 cursor-pointer">
        <button
          className="relative p-2 border-2 rounded-md focus:outline-none hover:border-blue-400"
          onClick={() => setDropmenu(!dropmenu)}
        >
          {locale}
          <div
            className={`${
              dropmenu == true ? "flex" : "hidden"
            } flex-col items-center bg-white rounded-md p-3 my-2 z-20 w-36 absolute top-12`}
          >
            <Link href="/en" locale="en">
              <a className="hover:text-gray-500">English-EN</a>
            </Link>
            <Link href="/fr" locale="fr">
              <a className="hover:text-gray-500">Francais-FR</a>
            </Link>
            <Link href="/ar" locale="ar">
              <a className="hover:text-gray-500">العربية-AR</a>
            </Link>
          </div>
        </button>
      </div>
      <div className="flex items-center md:mx-2">
        <div className="mx-2">
          <Image
            className="rounded-full hover:opacity-80 cursor-pointer"
            src="https://i.pravatar.cc/300"
            alt="user picture"
            width={50}
            height={50}
          />
        </div>
        <div className="groub flex flex-col items-center justify-center mx-1 cursor-pointer rounded-lg hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500 group-hover:animate-bounce"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-semibold px-1">{t("wish_list")}</span>
        </div>
        <Link href="/cart">
          <div className="relative flex flex-col items-center justify-center mx-1 cursor-pointer rounded-lg px-1 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-sm font-semibold ">{t("basket")}</span>
            <span className="rounded-full p-1 bg-red-700 text-white text-sm absolute top-0 right-1">
              {cart_products.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
