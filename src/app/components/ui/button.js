function CartButton({ size, text, onClick }) {
  let sizeStyle = "";

  if (size === "block") {
    sizeStyle = "w-full";
  }

  return (
    <button
      className={
        "btn bg-coffee-700 hover:bg-coffee-800 font-semibold text-white rounded-xl xl:w-fit " +
        sizeStyle
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function ButtonBlock({ text }) {
  return (
    <button className="btn bg-coffee-700 hover:bg-coffee-800 btn-block font-semibold text-white rounded-xl">
      {text}
    </button>
  );
}

export { CartButton };
