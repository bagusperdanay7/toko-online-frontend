import Image from "next/image";

export default function Card({ id, name, desc, price, image }) {
  const sizes = [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 2, size: "L" },
  ];

  return (
    <div className="card bg-secondary-light-bg lg:w-auto shadow-xl">
      <div className="card-body p-5 lg:p-7">
        <div className="flex flex-col justify-between">
          <Image
            src={image}
            width={125}
            height={125}
            alt="Picture of Caramel Frapuccino"
            className="rounded-xl lg:max-h-56 bg-center w-full h-full object-cover"
          />
          <h2 className="card-title text-black mt-3 capitalize">{name}</h2>
          <p className="text-sm text-neutral-700 mb-1">{desc}</p>
          <h3 className="text-black font-bold text-xl">
            <span>Rp</span> {price}
          </h3>
        </div>
        <div>
          <h3 className="font-semibold text-black text-base">Size</h3>
          <div className="mt-1">
            <ul className="flex flex-row space-x-3">
              {sizes.map((size) => (
                <li key={size.id}>
                  <input
                    type="radio"
                    id={"size" + size.size + id}
                    name={"size" + id}
                    value={"size" + size.size + id}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={"size" + size.size + id}
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
      </div>
    </div>
  );
}
