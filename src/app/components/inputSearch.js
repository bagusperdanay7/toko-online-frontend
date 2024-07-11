import { CiSearch } from "react-icons/ci";

export default function InputSearch() {
  return (
    <label className="input input-bordered flex items-center gap-2 bg-secondary-light-bg md:w-3/5 lg:w-2/5 focus:outline-coffee-600">
      <input
        type="search"
        className="grow placeholder:text-sm focus:border-coffee-300 placeholder:text-neutral-800 text-neutral-800"
        placeholder="Search category or menu"
      />
      <CiSearch className="text-xl" />
    </label>
  );
}
