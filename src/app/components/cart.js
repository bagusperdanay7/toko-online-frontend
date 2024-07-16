import Image from "next/image";
import contohProduct from "./../coffee1.jpg";

function Cart({ isShow, children }) {
  const baseClasses = "";
  return (
    <div
      className={
        isShow === true
          ? "block visible " +
            "w-60 lg:w-64 xl:w-80 h-screen fixed bg-secondary-light-bg border-l right-0 top-0 bottom-0 z-50 px-6 py-12 translate-x-0 transition-all duration-700"
          : "invisible " +
            "w-60 lg:w-64 xl:w-80 h-screen fixed bg-secondary-light-bg border-l right-0 top-0 bottom-0 z-50 px-6 py-12 translate-x-60 lg:translate-x-64 xl:translate-x-80 transition-all duration-700"
      }
    >
      <div className="flex justify-between">
        <h3 className="font-semibold text-base lg:text-xl text-black mb-6">
          Cart
        </h3>
        {children}
      </div>
      <Image
        src={contohProduct}
        className="rounded-lg w-12 h-12 object-cover"
        alt="Product"
      />
    </div>
  );
}

export default Cart;
