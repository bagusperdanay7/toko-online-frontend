"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";
import Main from "./components/semantic/main";
import Header from "./components/semantic/header";
import Sidebar from "./components/semantic/sidebar";
import SidebarMobile from "./components/semantic/sidebarMobile";
import Card from "./components/ui/card";
import { Search } from "./components/ui/input";
import Cart from "./components/feature/cart";
import CategoryCard from "./components/feature/categoryCard";
import noData from "./assets/no_data.svg";
import Loading from "./loading";
import Image from "next/image";
import { useRouter } from "next/router";

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

  // const router = useRouter();

  // TODO: Ubah state management menggunakana Zustand (https://docs.pmnd.rs/zustand/getting-started/introduction)
  const [active, setActive] = useState("");
  const [products, setProducts] = useState([]);
  const [cartShow, setCartShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleCartShow() {
    setCartShow(!cartShow);
  }

  function handleSidebarMobile() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        setProducts(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <Sidebar className="bg-secondary-light-bg z-10 w-3/5 sm:w-2/12 md:w-[15%] lg:w-[10%] h-screen sm:h-auto fixed sm:relative hidden sm:flex justify-center py-3 md:py-8" />
        <SidebarMobile isOpen={isOpen} />
        <Main>
          <Header
            handleCart={handleCartShow}
            handleSidebar={handleSidebarMobile}
          />
          <section className="mt-6" id="titleAndSearch">
            <div className="block md:flex md:justify-between md:items-center">
              <h1 className="font-bold text-xl md:text-2xl text-black mb-3 md:mb-0">
                Choose Category
              </h1>
              <Search />
            </div>
          </section>
          <section className="mt-8" id="categories">
            <div className="grid md:grid-cols-7 grid-cols-3 gap-4 justify-between auto-cols-max">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  active={active}
                  setActive={setActive}
                ></CategoryCard>
              ))}
            </div>
          </section>
          <section id="menus">
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
            {products.length < 1 ? (
              <div className="grid grid-1 place-items-center gap-y-3">
                <Image
                  src={noData}
                  alt="No Data Image"
                  className="w-28 md:w-48 align-middle"
                />
                <h3 className="font-extrabold text-black text-center text-lg md:text-xl">
                  Product Tidak Ada!
                </h3>
                <p className="font-medium text-neutral-500 text-center text-sm">
                  Tidak dapat menemukan product
                </p>
              </div>
            ) : (
              <div className="grid grid-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    desc={product.description}
                    image={product.imageUrl}
                    price={product.price}
                  ></Card>
                ))}
              </div>
            )}
          </section>
        </Main>
      </div>
    </div>
  );
}
