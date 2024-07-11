import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <label className="input input-bordered flex items-center gap-2 bg-primary-light-bg">
      <input
        type="search"
        className="grow"
        placeholder="Search category or menu"
      />
      <CiSearch className="text-xl" />
    </label>
  );
}
