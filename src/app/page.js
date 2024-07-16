"use client";
import Sidebar from "./components/sidebar";
import InputSearch from "./components/inputSearch";
import CategoryCard from "./components/categoryCard";
import Card from "./components/card";
import { useState } from "react";
import Image from "next/image";
import avatar from "./coffee1.jpg";
import { LuShoppingCart } from "react-icons/lu";
import Cart from "./components/cart";
import { IoCloseOutline } from "react-icons/io5";

export default function Home() {
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Coffee" },
    { id: 3, name: "Juice" },
    { id: 4, name: "Milk" },
    { id: 5, name: "Snack" },
    { id: 6, name: "Rice" },
    { id: 7, name: "Dessert" },
  ];

  const [active, setActive] = useState("");
  const [cartShow, setCartShow] = useState(false);

  function handleCartShow() {
    setCartShow(!cartShow);
  }

  function handleSidebarMobile() {}

  return (
    <div>
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
        <main className="bg-primary-light-bg z-0 w-full sm:w-10/12 md:w-[85%] lg:w-[90%] min-h-screen px-4 py-6 lg:py-12">
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
                onClick={handleCartShow}
                className="p-2 bg-transparent border-0 rounded-full hover:bg-neutral-100 active:scale-95 transition-all"
              >
                <LuShoppingCart className="text-2xl text-neutral-500" />
              </button>
            </div>
          </header>
          <div className="block md:flex md:justify-between md:items-center">
            <h1 className="font-bold text-xl md:text-2xl text-black mb-3 md:mb-0">
              Choose Category
            </h1>
            <InputSearch />
          </div>
          <div className="grid md:grid-cols-7 grid-cols-3 gap-4 justify-between auto-cols-max mt-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                active={active}
                setActive={setActive}
              ></CategoryCard>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center mb-5">
            <h1 className="text-black font-semibold text-xl md:text-2xl">
              Coffee Menu
            </h1>
            <p className="text-sm font-semibold text-coffee-900">
              11 Coffee Result
            </p>
          </div>
          <div className="grid grid-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card productId={1} />
            <Card productId={2} />
            <Card productId={3} />
          </div>
        </main>
      </div>
    </div>
  );
}
