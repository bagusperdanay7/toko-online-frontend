import Image from "next/image";
import profilePic from "../coffee.jpg";

export default function Card({ productId, name, desc, price, image }) {
  const sizes = [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 2, size: "L" },
  ];

  return (
    <div className="card bg-secondary-light-bg lg:w-auto shadow-xl">
      <div className="card-body p-5 lg:p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-5 items-center ">
          <Image
            src={image}
            width={125}
            height={125}
            alt="Picture of Caramel Frapuccino"
            className="rounded-xl w-full h-full sm:h-48 md:h-[200px] md:w-[200px] max-h-72 object-cover"
          />
          <div className="w-full">
            <h2 className="card-title text-black mb-2 capitalize">{name}</h2>
            <p className="text-sm text-neutral-700 mb-2">{desc}</p>
            <h3 className="text-black font-bold text-xl">
              <span>Rp</span> {price}
            </h3>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-black text-base">Size</h3>
          <div className="mt-1">
            <ul className="flex flex-row space-x-3">
              {sizes.map((size) => (
                <li key={size.id}>
                  <input
                    type="radio"
                    id={"size" + size.size + productId}
                    name={"size" + productId}
                    value={"size" + size.size + productId}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={"size" + size.size + productId}
                    className="inline-flex rounded-full items-center justify-between px-2.5 py-1 text-coffee-700 bg-coffee-50 border border-white cursor-pointer peer-checked:bg-coffee-100 peer-checked:text-coffee-600 peer-checked:border-1 peer-checked:border-coffee-700 hover:text-coffee-800 hover:bg-coffee-100"
                  >
                    <div className="block">
                      <div className="w-full text-sm font-semibold">
                        {size.size}
                      </div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-actions mt-4 justify-end">
          <button className="btn bg-coffee-700 hover:bg-coffee-800 btn-block font-semibold text-white rounded-xl">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
