"use client";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Main from "../components/main";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Cart from "../components/cart";
import Image from "next/image";
import example from "../coffee1.jpg";

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
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Image
                src={example}
                alt="Example Product"
                className="w-full rounded-xl max-h-96 object-fill"
              />
            </div>
            <div>
              <p className="text-coffee-800 font-semibold mb-1">Minuman</p>
              <h1 className="text-black font-extrabold capitalize lg:text-3xl mb-1">
                Capuccino Frapuccino
              </h1>
              <h3 className="text-black font-bold text-xl mb-1">RP. 15000</h3>
              <p className="text-neutral-700 text-sm font-medium mb-2">
                Stock: 100
              </p>
              <p className="text-neutral-700 font-normal lg:text-sm xl:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ullam et sed laborum corporis sapiente.
              </p>
            </div>
          </div>
        </Main>
      </div>
    </>
  );
}
