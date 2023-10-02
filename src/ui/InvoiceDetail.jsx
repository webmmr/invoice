import {
  Link,
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";

import Status from "./Status";
import Button from "./Button";
import InvoiceItem from "./InvoiceItem";
import { formatCurrency } from "../utils/helpers";

function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const invoice = useLoaderData().filter((item) => item.id === id);

  console.log(invoice);

  const {
    clientAddress,
    clientEmail,
    clientName,
    createdAt,
    description,
    items,
    paymentDue,
    paymentTerms,
    senderAddress,
    status,
    total,
  } = invoice[0];

  const {
    city: cCity,
    country: cCountry,
    postCode: cPostCode,
    street: cStreet,
  } = clientAddress;

  const {
    city: sCity,
    country: sCountry,
    postCode: sPostCode,
    street: sStreet,
  } = senderAddress;

  return (
    <>
      <div id="back">
        <Link to={navigate(-1)}>Go Back</Link>
      </div>
      <section className="bg-white p-8 shadow-normal rounded-lg flex justify-between mb-14">
        <div id="status" className="flex items-center">
          <span className="text-skyBlue mr-5">Status</span>
          <Status status={status} />
        </div>
        <div id="actions" className="flex items-center justify-end gap-5">
          <Button type="ghost">Edit</Button>
          <Button type="danger">Delete</Button>
          <Button type="primary">Mark as Paid</Button>
        </div>
      </section>
      <section className="bg-white p-20 shadow-normal rounded-lg">
        <div className="flex justify-between mb-10">
          <div>
            <p className="text-veryDark font-bold text-xl">
              <span className="text-skyBlue">#</span>
              {id}
            </p>
            <p className="text-skyBlue">{description}</p>
          </div>
          <div className="text-skyBlue">
            <p>{sStreet}</p>
            <p>{sCity}</p>
            <p>{sPostCode}</p>
            <p>{sCountry}</p>
          </div>
        </div>
        <div className="flex justify-between mb-10">
          <div id="date" className="basis-1/3">
            <p className="text-skyBlue mb-3">Invoice Date</p>
            <h3 className="font-bold text-lg mb-8">{createdAt}</h3>
            <p className="text-skyBlue mb-3">Payment Due</p>
            <h3 className="font-bold text-lg">{paymentDue}</h3>
          </div>
          <div id="billInfo" className="flex  basis-2/3">
            <div id="address" className="basis-1/2">
              <p className="text-skyBlue mb-3">Bill to</p>
              <h4 className="font-bold text-md">{clientName}</h4>
              <p className="text-skyBlue">{cStreet}</p>
              <p className="text-skyBlue">{cCity}</p>
              <p className="text-skyBlue">{cPostCode}</p>
              <p className="text-skyBlue">{cCountry}</p>
            </div>
            <div id="email" className="basis-1/2">
              <p className="text-skyBlue mb-3">Sent to</p>
              <h4 className="font-bold text-md">{clientEmail}</h4>
            </div>
          </div>
        </div>
        <div
          id="items"
          className="bg-lightAsh p-10 rounded-tr-lg rounded-tl-lg"
        >
          <div id="head" className="text-skyBlue flex justify-between mb-4">
            <p className="basis-[50%]">Item Name</p>
            <p className="basis-[10%] text-center">QTY.</p>
            <p className="basis-[20%] text-right">Price</p>
            <p className="basis-[20%] text-right">Total</p>
          </div>
          {items.map((item) => (
            <InvoiceItem item={item} key={item.name} />
          ))}
        </div>
        <div className="bg-lightDark flex justify-between items-center p-10 rounded-br-lg rounded-bl-lg">
          <p className="text-light">Amount Due</p>
          <h2 className="text-3xl font-bold text-light">
            {formatCurrency(total)}
          </h2>
        </div>
      </section>
    </>
  );
}

export default InvoiceDetail;
