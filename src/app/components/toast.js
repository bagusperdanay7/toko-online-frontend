function Toast({ text }) {
  return (
    <div className="toast">
      <div className="alert border-neutral-400 bg-secondary-light-bg text-black">
        <span className="text-xs sm:text-sm">{text}</span>
      </div>
    </div>
  );
}

export default Toast;
