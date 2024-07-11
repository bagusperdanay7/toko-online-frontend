import Image from "next/image";
import profilePic from "../coffee.jpg";

export default function Card() {
  return (
    <div className="card bg-secondary-light-bg lg:w-auto shadow-xl">
      <div className="card-body p-5 lg:p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-5 items-center">
          <Image
            src={profilePic}
            width={125}
            height={125}
            alt="Picture of Caramel Frapuccino"
            className="rounded-xl w-full h-full md:h-[200px] max-h-72 object-cover"
          />
          <div className="w-full">
            <h2 className="card-title text-black mb-2">Chocolate Frapuccino</h2>
            <p className="text-sm text-neutral-700 mb-2">
              Sirup Karamel dengan Kopi yang dicampur dengan krim
            </p>
            <h3 className="text-black font-bold text-xl">
              <span>Rp</span> 15000
            </h3>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-coffee-700 hover:bg-coffee-800 btn-block font-semibold text-white rounded-xl">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
