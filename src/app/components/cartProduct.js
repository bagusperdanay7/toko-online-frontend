import { useState } from "react";
import Image from "next/image";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IconBadge } from "./badge";
import { LuPencil } from "react-icons/lu";
import contohProduct from "./../coffee1.jpg";

function CartProduct({ nama, harga }) {
  const [productNumber, setProductNumber] = useState(1);

  if (productNumber < 0) {
    setProductNumber(0);
  }

  return (
    <div className="flex justify-between mb-8">
      <Image
        src={contohProduct}
        className="rounded-lg w-24 h-16 object-cover"
        alt="Product"
      />
      <div className="w-full flex flex-row ml-2 gap-2 items-center">
        <div className="basis-2/3">
          <h2 className="font-semibold text-black text-base mb-1">{nama}</h2>
          <h2 className="font-bold text-neutral-600 mb-2">
            Rp. {productNumber * harga}
          </h2>
          <button className="" onClick={() => alert("Notes diklik")}>
            <IconBadge text="Notes" icon={<LuPencil className="ml-1" />} />
          </button>
        </div>
        <div
          className="flex justify-between border border-neutral-400 rounded-lg basis-1/3"
          id="productNumberButton"
        >
          <button
            className="text-black px-2 rounded-lg border border-transparent active:border-coffee-400 active:border"
            onClick={() => {
              setProductNumber((prev) => prev - 1);
            }}
            disabled={productNumber === 0}
          >
            <IoIosRemove className="text-black font-semibold text-lg" />
          </button>
          <input
            type="text"
            className="text-sm bg-transparent text-black py-2 font-semibold text-center focus:border-0 focus:outline-none w-full"
            value={productNumber}
          />
          <button
            className="text-black px-2 rounded-lg border border-transparent active:border-coffee-400 active:border"
            onClick={() => {
              setProductNumber((prev) => prev + 1);
            }}
          >
            <IoIosAdd className="text-black font-semibold text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
