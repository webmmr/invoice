function Button({ children, type }) {
  const base =
    "px-6 py-4 font-bold rounded-full transition-colors transition-0.3s";
  const styles = {
    primary:
      base +
      "  flex items-center bg-brand text-sm font-bold text-light hover:bg-accent ",
  };
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
