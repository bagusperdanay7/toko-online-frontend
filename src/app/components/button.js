function PrimaryButton({ size, text }) {
  let sizeStyle = "";

  if (size === "block") {
    sizeStyle = "btn-block";
  }

  return (
    <button
      className={
        "btn bg-coffee-700 hover:bg-coffee-800 font-semibold text-white rounded-xl " +
        sizeStyle
      }
    >
      {text}
    </button>
  );
}

export { PrimaryButton };
