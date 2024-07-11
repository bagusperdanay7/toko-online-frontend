import Image from "next/image";
import Sidebar from "./components/sidebar";
import Search from "./components/search";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="bg-primary-light-bg min-h-screen px-4">
      <Sidebar />
      <h1 className="font-semibold text-3xl text-black mb-3">
        Choose Category
      </h1>
      <Search />
      <div className="flex justify-between mt-6 flex-wrap">
        <div className="bg-secondary-light-bg p-4 border rounded-lg hover:ring-2 hover:ring-coffee-500">
          <IoFastFoodOutline className="text-2xl mb-2" />
          <span className="font-medium">All</span>
        </div>
        <div className="bg-secondary-light-bg p-4 border rounded-lg">
          <IoFastFoodOutline className="text-2xl" />
          Coffee
        </div>
        <div className="bg-secondary-light-bg p-4 border rounded-lg">
          <IoFastFoodOutline className="text-2xl" />
          Juice
        </div>
        <div className="bg-secondary-light-bg p-4 border rounded-lg">
          <IoFastFoodOutline className="text-2xl" />
          Milk Based
        </div>
        <div className="bg-secondary-light-bg p-4 border rounded-lg">
          <IoFastFoodOutline className="text-2xl" />
          Snack
        </div>
        <div className="bg-secondary-light-bg p-4 border rounded-lg">
          <IoFastFoodOutline className="text-2xl" />
          Rice
        </div>
        <div className="bg-secondary-light-bg p-4 border rounded-lg">
          <IoFastFoodOutline className="text-2xl" />
          Dessert
        </div>
      </div>
    </main>
  );
}
