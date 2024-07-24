"use client";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Main from "../components/main";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Cart from "../components/cart";

export default function Products() {
  const [cartShow, setCartShow] = useState(false);

  function handleCartShow() {
    setCartShow(!cartShow);
  }

  return (
    <>
      <Cart isShow={cartShow}>
        <button
          className="btn btn-xs bg-primary-light-bg text-neutral-800 btn-circle hover:bg-neutral-200 border-neutral-600"
          onClick={handleCartShow}
        >
          <IoCloseOutline className="text-lg" />
        </button>
      </Cart>
      <div className="flex flex-row">
        <Sidebar className="bg-secondary-light-bg z-10 w-3/5 sm:w-2/12 md:w-[15%] lg:w-[10%] h-screen sm:h-auto fixed sm:relative flex justify-center py-3 md:py-8" />
        <Main>
          <Header />
        </Main>
      </div>
    </>
  );
}
