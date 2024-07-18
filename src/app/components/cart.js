import Image from "next/image";
import CartProduct from "./cartProduct";
import { useState } from "react";

function Cart({ isShow, children }) {
  const baseClasses = "";

  const products = [
    { id: 1, nama: "Chocolate Frapuccino", harga: 15000 },
    { id: 2, nama: "Milkshake Strawberry", harga: 12000 },
    { id: 3, nama: "Dark Coffee & Sugar", harga: 10000 },
    { id: 4, nama: "Peppermint Machiato", harga: 17000 },
  ];

  const cart = {};

  const subtotal = () => {
    const total = products.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.harga;
    }, 0);

    return total;
  };

  const tax = () => {
    return subtotal() * 0.1;
  };

  const grandTotal = () => {
    return subtotal() + tax();
  };

  return (
    <div
      className={
        isShow
          ? "block visible " +
            "w-60 lg:w-96 xl:w-[28rem] h-screen fixed bg-secondary-light-bg border-l right-0 top-0 bottom-0 z-50 px-6 py-12 translate-x-0 transition-all duration-700 overflow-y-auto"
          : "invisible " +
            "w-60 lg:w-96 xl:w-[28rem] h-screen fixed bg-secondary-light-bg border-l right-0 top-0 bottom-0 z-50 px-6 py-12 translate-x-60 lg:translate-x-96 xl:translate-x-[28rem] transition-all duration-700"
      }
    >
      <div className="flex justify-between">
        <h1 className="font-semibold text-base lg:text-xl text-black mb-6">
          Cart
        </h1>
        {children}
      </div>
      {products.map((product) => (
        <CartProduct
          key={product.id}
          nama={product.nama}
          harga={product.harga}
        ></CartProduct>
      ))}
      <div className="mt-8">
        <div className="flex justify-between">
          <h3 className="text-black text-sm font-semibold">Subtotal</h3>
          <p className="text-black text-sm font-semibold">Rp. {subtotal()}</p>
        </div>
        <div className="flex justify-between mt-2">
          <h3 className="text-neutral-700 text-sm font-medium">Tax (10%)</h3>
          <p className="text-neutral-700 text-sm font-medium">Rp. {tax()}</p>
        </div>
      </div>
      <div className="border border-neutral-400 border-dashed my-2"></div>
      <div>
        <div className="flex justify-between">
          <h3 className="text-black text-base font-bold">Total</h3>
          <p className="text-black text-base font-bold">Rp. {grandTotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
