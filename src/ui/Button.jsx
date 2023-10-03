function Button({ children, variation, onClick }) {
  const base =
    "px-6 py-3 flex items-center justify-center font-bold rounded-full transition-colors transition-0.3s font-bold";

  const styles = {
    primary: base + "   bg-brand  text-light hover:bg-accent ",
    danger: base + " bg-darkOrange hover:bg-lightOrange text-light",
    ghost: base + " bg-lightGray hover:bg-lightAsh",
  };

  if (onClick)
    return (
      <button onClick={onClick} className={styles[variation]}>
        {children}
      </button>
    );

  return (
    <button className={styles[variation]} type="button">
      {children}
    </button>
  );
}

export default Button;
