import { formatCurrency } from "../utils/helpers";

function InvoiceItem({ item }) {
  const { name, quantity, price, total } = item;
  return (
    <div className="flex justify-between py-2 text-lg font-bold">
      <h5 className="basis-[50%] ">{name}</h5>
      <h5 className="basis-[10%] text-skyBlue text-center">{quantity}</h5>
      <h5 className="basis-[20%] text-skyBlue  text-right">
        {formatCurrency(price)}
      </h5>
      <h5 className="basis-[20%]  text-right">{formatCurrency(total)}</h5>
    </div>
  );
}

export default InvoiceItem;
