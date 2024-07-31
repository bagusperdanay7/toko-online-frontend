"use client";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Main from "../components/main";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Cart from "../components/cart";
import Image from "next/image";
import example from "../coffee1.jpg";
import { CartButton } from "../components/button";
import Toast from "../components/toast";

export default function Products() {
  const [cartShow, setCartShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  function handleToastShow() {
    setToastShow(true);

    setTimeout(() => {
      setToastShow(false);
    }, 3000);
  }

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
        <Sidebar className="bg-secondary-light-bg z-10 w-3/5 sm:w-2/12 md:w-[15%] lg:w-[10%] h-screen sm:h-auto fixed sm:relative hidden sm:flex justify-center py-3 md:py-8" />
        <Main>
          <Header handleCart={handleCartShow} />
          <section className="mt-6" id="product-detail">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <div>
                <Image
                  src={example}
                  alt="Example Product"
                  className="w-full rounded-xl max-h-72 sm:max-h-80 md:max-h-fit lg:max-h-[30rem] object-cover object-bottom"
                />
              </div>
              <div>
                <h1 className="text-black font-extrabold capitalize text-xl lg:text-3xl mb-2">
                  Capuccino Frapuccino
                </h1>
                <h3 className="text-black font-bold text-base lg:text-xl mb-2">
                  RP. 15000
                </h3>
                <p className="text-neutral-700 text-sm font-medium mb-3">
                  Stock: 100
                </p>
                <div className="block">
                  <span className="p-2 bg-coffee-100 rounded-xl text-xs md:text-sm text-coffee-800 font-semibold">
                    Minuman
                  </span>
                </div>
                <p className="text-black font-semibold text-base mt-3">
                  Deskripsi:
                </p>
                <p className="text-neutral-700 font-normal text-sm mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit ullam et sed laborum corporis sapiente.
                </p>
                <CartButton
                  text="Add to Cart"
                  size="block"
                  onClick={handleToastShow}
                />
              </div>
            </div>
          </section>
          {toastShow ? <Toast text="Product ditambahkan ke cart" /> : null}
        </Main>
      </div>
    </>
  );
}
