"use client";
import Sidebar from "./components/sidebar";
import InputSearch from "./components/inputSearch";
import CategoryCard from "./components/categoryCard";
import Card from "./components/card";
import { useState } from "react";

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

  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="bg-primary-light-bg w-[90%] min-h-screen px-4 py-6 lg:py-12">
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
  );
}
