function Badge({ text }) {
  return (
    <span className="p-2 bg-coffee-100 rounded-xl text-xs md:text-sm text-coffee-800 font-semibold">
      {text}
    </span>
  );
}

function IconBadge({ text, icon }) {
  return (
    <span className="inline-flex items-center font-semibold rounded-md bg-coffee-100 p-2 py-1 text-xs text-coffee-800">
      {text} {icon}
    </span>
  );
}

export { Badge, IconBadge };
