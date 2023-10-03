import Button from "./Button";
import Plus from "../assets/icon-plus.svg";

import { useLoaderData } from "react-router-dom";
import SingleInvoice from "./SingleInvoice";

function Invoices() {
  const invoices = useLoaderData();

  return (
    <>
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-lg font-bold ">Invoices</h1>
          <p className="text-darkAsh font-medium">There are 7 total invoices</p>
        </div>
        <Button variation="primary">
          <img
            src={Plus}
            alt="Create"
            className="bg-white w-8 h-8 rounded-full text-center leading-6 flex p-2 mr-2"
          />
          <span>New Invoice</span>
        </Button>
      </header>
      <section>
        {invoices.map((invoice) => (
          <SingleInvoice invoice={invoice} key={invoice.id} />
        ))}
      </section>
    </>
  );
}

export default Invoices;
