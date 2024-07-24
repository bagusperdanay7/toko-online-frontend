"use client";

import { useState } from "react";
import Image from "next/image";
import avatar from "../avatar.jpg";
import { LuShoppingCart } from "react-icons/lu";

export default function Header({ handleCart }) {
  return (
    <header className="flex justify-between">
      <div className="flex flex-row items-center space-x-2 mb-7">
        <Image
          src={avatar}
          alt="Profile Avatar"
          className="rounded-full w-8 h-8"
        />
        <p className="text-black font-medium text-sm">Bagus Perdana</p>
      </div>

      <div>
        <button
          onClick={handleCart}
          className="p-2 bg-transparent border-0 rounded-full hover:bg-neutral-100 active:scale-95 transition-all"
        >
          <LuShoppingCart className="text-2xl text-neutral-500" />
        </button>
      </div>
    </header>
  );
}
