"use client"; //
import { IoFastFoodOutline } from "react-icons/io5";
import { LuMilk, LuCakeSlice } from "react-icons/lu";
import { BiBowlRice } from "react-icons/bi";
import { PiCoffee, PiMartini, PiCookie } from "react-icons/pi";

export default function CategoryCard({ active, setActive, category }) {
  let icon;
  const iconClass = "text-3xl mb-2";

  const getCategoryId = () => {
    setActive(category.id);
  };

  if (category.name === "All") {
    icon = <IoFastFoodOutline className={iconClass} />;
  } else if (category.name === "Coffee") {
    icon = <PiCoffee className={iconClass} />;
  } else if (category.name === "Juice") {
    icon = <PiMartini className={iconClass} />;
  } else if (category.name === "Milk") {
    icon = <LuMilk className={iconClass} />;
  } else if (category.name === "Snack") {
    icon = <PiCookie className={iconClass} />;
  } else if (category.name === "Rice") {
    icon = <BiBowlRice className={iconClass} />;
  } else if (category.name === "Dessert") {
    icon = <LuCakeSlice className={iconClass} />;
  } else {
    icon = <IoFastFoodOutline className={iconClass} />;
  }

  return (
    <button
      onClick={getCategoryId}
      className={
        "flex flex-col items-center justify-center p-4 border text-coffee-800 rounded-lg cursor-pointer hover:text-coffee-600 hover:font-medium ring-0 hover:ring-1 hover:ring-coffee-500 " +
        (active === category.id
          ? "bg-coffee-50 ring-2 ring-coffee-600 font-semibold"
          : "bg-secondary-light-bg")
      }
    >
      {icon}
      <span className="text-sm">{category.name}</span>
    </button>
  );
}
