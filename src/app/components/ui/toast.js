function Toast({ text, children }) {
  return (
    <div className="toast">
      <div className="alert border-neutral-400 bg-secondary-light-bg text-black">
        {children}
        <span className="text-xs sm:text-sm">{text}</span>
      </div>
    </div>
  );
}

export default Toast;
