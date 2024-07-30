import Link from "next/link";

function Menu({ href, children, active, name }) {
  if (active) {
    return (
      <li>
        <Link
          href={href}
          className="flex flex-col items-center py-2 px-3 sm:px-3 lg:px-2 xl:px-5 rounded-xl text-white bg-coffee-800 group"
        >
          {children}
          <span className="mt-1 block text-xs">{name}</span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className="flex flex-col items-center py-2 px-3 sm:px-3 lg:px-2 xl:px-5 rounded-xl text-neutral-700 group hover:text-coffee-700"
      >
        {children}
        <span className="mt-1 block text-xs">{name}</span>
      </Link>
    </li>
  );
}

export default Menu;
