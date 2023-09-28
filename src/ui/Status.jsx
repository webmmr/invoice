function Status({ status }) {
  return (
    <div
      className={`capitalize px-8 py-4 text-center rounded-lg bg-opacity-5  ${
        status === "paid"
          ? "bg-paid"
          : status === "pending"
          ? "bg-pending"
          : status === "draft"
          ? "bg-draft"
          : ""
      }`}
    >
      <span
        className={`w-3 h-3 rounded-full inline-block mr-2 pt-2 ${
          status === "paid"
            ? "bg-paid"
            : status === "pending"
            ? "bg-pending"
            : status === "draft"
            ? "bg-draft"
            : ""
        }`}
      ></span>
      <span
        className={`${
          status === "paid"
            ? "text-paid"
            : status === "pending"
            ? "text-pending"
            : status === "draft"
            ? "text-draft"
            : ""
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default Status;
