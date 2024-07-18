function Badge({ text }) {
  return (
    <span className="inline-flex items-center font-semibold rounded-md bg-coffee-100 px-2 py-1 text-xs text-coffee-800">
      {text}
    </span>
  );
}

function IconBadge({ text, icon }) {
  return (
    <span className="inline-flex items-center font-semibold rounded-md bg-coffee-100 px-2 py-1 text-xs text-coffee-800">
      {text} {icon}
    </span>
  );
}

export { Badge, IconBadge };
