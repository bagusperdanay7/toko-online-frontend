import Link from "next/link";
import { GoHome } from "react-icons/go";
import { BiSolidFoodMenu } from "react-icons/bi";
import {
  RiDiscountPercentLine,
  RiSettings3Line,
  RiHistoryFill,
} from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineWallet } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className="w-[10%] bg-secondary-light-bg py-12 flex justify-center">
      <div className="fixed z-10">Logo</div>
      <aside className="h-screen fixed mt-16 z-5">
        <div className="h-full">
          <ul className="font-regular text-sm space-y-2">
            <li>
              <Link
                href="/"
                className="flex flex-col items-center py-2 px-5 rounded-xl text-neutral-700 group"
              >
                <GoHome className="text-2xl" />
                <span className="mt-1 block text-xs">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="flex flex-col items-center py-2 px-5 rounded-xl text-white bg-coffee-800 group"
              >
                <BiSolidFoodMenu className="text-2xl" />
                <span className="mt-1 block text-xs">Menu</span>
              </Link>
            </li>
            <li>
              <Link
                href="/history"
                className="flex flex-col items-center py-2 px-5 rounded-xl text-neutral-700 group"
              >
                <RiHistoryFill className="text-2xl" />
                <span className="mt-1 block text-xs">History</span>
              </Link>
            </li>
            <li>
              <Link
                href="/wallet"
                className="flex flex-col items-center py-2 px-5 rounded-xl text-neutral-700 group"
              >
                <HiOutlineWallet className="text-2xl" />
                <span className="mt-1 block text-xs">Wallet</span>
              </Link>
            </li>
            <li>
              <Link
                href="/wallet"
                className="flex flex-col items-center py-2 px-5 rounded-xl text-neutral-700 group"
              >
                <RiDiscountPercentLine className="text-2xl" />
                <span className="mt-1 block text-xs">Promo</span>
              </Link>
            </li>
            <li>
              <Link
                href="/wallet"
                className="flex flex-col items-center py-2 px-5 rounded-xl text-neutral-700 group"
              >
                <RiSettings3Line className="text-2xl" />
                <span className="mt-1 block text-xs">Settings</span>
              </Link>
            </li>
          </ul>
          <ul className="font-regular text-sm fixed bottom-3 space-y-2">
            <li>
              <Link
                href="/wallet"
                className="flex flex-col items-center py-2 px-5 rounded-xl text-neutral-700 group"
              >
                <HiOutlineLogout className="text-2xl" />
                <span className="mt-1 block text-xs">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
