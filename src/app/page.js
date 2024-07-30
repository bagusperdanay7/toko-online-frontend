"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";
import Main from "./components/main";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Card from "./components/card";
import Cart from "./components/cart";
import CategoryCard from "./components/categoryCard";
import { Search } from "./components/input";

export default function Home() {
  const getAllProducts = async () => {
    const products = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/product`
    );

    return products.data;
  };

  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Coffee" },
    { id: 3, name: "Juice" },
    { id: 4, name: "Milk" },
    { id: 5, name: "Snack" },
    { id: 6, name: "Rice" },
    { id: 7, name: "Dessert" },
  ];

  const exampleProducts = [
    {
      id: 1,
      name: "Cappucino",
      price: 15000,
      description: "Terbuat dari Kopi pilihan",
      imageUrl:
        "https://images.unsplash.com/photo-1524060545405-b99eebf362ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // TODO: Ubah state management menggunakana Zustand (https://docs.pmnd.rs/zustand/getting-started/introduction)
  const [active, setActive] = useState("");
  const [products, setProducts] = useState(exampleProducts);
  const [cartShow, setCartShow] = useState(false);

  function handleCartShow() {
    setCartShow(!cartShow);
  }

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <Main>
          <Header handleCart={handleCartShow} />
          <div className="block md:flex md:justify-between md:items-center">
            <h1 className="font-bold text-xl md:text-2xl text-black mb-3 md:mb-0">
              Choose Category
            </h1>
            <Search />
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
              Menu
            </h1>
            <p className="text-sm font-semibold text-coffee-900">
              {products.length < 2
                ? products.length + " Result"
                : products.length + " Results"}
            </p>
          </div>
          <div className="grid grid-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                desc={product.description}
                image={product.imageUrl}
              />
            ))}
          </div>
        </Main>
      </div>
    </div>
  );
}
