"use client";

import Image from "next/image";
import avatar from "../avatar.jpg";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ handleCart, handleSidebar }) {
  return (
    <header className="flex justify-between">
      <button className="flex sm:hidden" onClick={handleSidebar}>
        <RxHamburgerMenu className="text-2xl text-black" />
      </button>

      <div className="hidden sm:flex flex-row items-center space-x-2 mb-7">
        <Image
          src={avatar}
          alt="Profile Avatar"
          className="rounded-full w-8 h-8"
        />
        <p className="text-black font-medium text-sm hidden sm:block">
          Bagus Perdana
        </p>
      </div>

      <div className="flex flex-row items-center sm:items-start space-x-2">
        <button
          onClick={handleCart}
          className="p-2 bg-transparent border-0 rounded-full hover:bg-neutral-100 active:scale-95 transition-all"
        >
          <LuShoppingCart className="text-2xl text-neutral-500" />
        </button>
        <Image
          src={avatar}
          alt="Profile Avatar"
          className="rounded-full w-8 h-8 sm:hidden"
        />
      </div>
    </header>
  );
}
