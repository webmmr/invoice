function Button({ children, type }) {
  const base =
    "px-6 py-4 font-bold rounded-full transition-colors transition-0.3s font-bold";
  const styles = {
    primary: base + "  flex items-center bg-brand  text-light hover:bg-accent ",
    danger: base + " bg-darkOrange hover:bg-lightOrange text-light",
    ghost: base + " bg-light hover:bg-lightAsh",
  };
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
