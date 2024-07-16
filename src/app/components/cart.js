import Image from "next/image";
import contohProduct from "./../coffee1.jpg";

function Cart({ isShow, children }) {
  const baseClasses = "";
  return (
    <div
      className={
        isShow === true
          ? "block visible " +
            "w-56 h-screen fixed bg-secondary-light-bg right-0 top-0 bottom-0 z-50 px-6 py-12 translate-x-0 transition-all duration-700"
          : "invisible " +
            "w-56 h-screen fixed bg-secondary-light-bg right-0 top-0 bottom-0 z-50 px-6 py-12 translate-x-60 transition-all duration-700"
      }
    >
      <h3 className="font-semibold text-base text-black mb-6">Cart</h3>
      <Image
        src={contohProduct}
        className="rounded-lg w-12 h-12 object-cover"
        alt="Product"
      />
      {children}
    </div>
  );
}

export default Cart;
