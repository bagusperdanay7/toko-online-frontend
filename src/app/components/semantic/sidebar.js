import { GoHome, GoHomeFill } from "react-icons/go";
import { BiFoodMenu, BiSolidFoodMenu } from "react-icons/bi";
import {
  RiDiscountPercentLine,
  RiSettings3Line,
  RiHistoryFill,
} from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineWallet } from "react-icons/hi2";
import Menu from "./menu";
import { usePathname } from "next/navigation";

export default function Sidebar({ className }) {
  const pathname = usePathname();

  return (
    <div className={className} id="sidebar">
      <aside className="h-screen fixed z-10">
        <div className="z-20 text-black text-center mb-8">Logo</div>
        <div className="h-full">
          <ul className="font-regular text-sm space-y-2">
            <Menu href="/" name="Home" active={pathname === "/" ? true : false}>
              {pathname === "/" ? (
                <GoHomeFill className="text-2xl" />
              ) : (
                <GoHome className="text-2xl" />
              )}
            </Menu>
            <Menu
              href="/products"
              name="Product"
              active={pathname === "/products" ? true : false}
            >
              {pathname === "/products" ? (
                <BiSolidFoodMenu className="text-2xl" />
              ) : (
                <BiFoodMenu className="text-2xl" />
              )}
            </Menu>
            <Menu href="/history" name="History" active={false}>
              <RiHistoryFill className="text-2xl" />
            </Menu>
            <Menu href="/wallet" name="Wallet" active={false}>
              <HiOutlineWallet className="text-2xl" />
            </Menu>
            <Menu href="/promo" name="Promo" active={false}>
              <RiDiscountPercentLine className="text-2xl" />
            </Menu>
            <Menu href="/settings" name="Settings" active={false}>
              <RiSettings3Line className="text-2xl" />
            </Menu>
          </ul>
          {/* TODO: Betulkan disini */}
          <ul className="font-regular text-sm fixed bottom-3 space-y-2">
            <Menu href="/logout" name="Log Out" active={false}>
              <HiOutlineLogout className="text-2xl" />
            </Menu>
          </ul>
        </div>
      </aside>
    </div>
  );
}
