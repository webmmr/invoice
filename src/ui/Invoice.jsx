import Button from "./Button";
import RArrow from "../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import Status from "./Status";
import { formatCurrency } from "../utils/helpers";

/* eslint-disable react/prop-types */
function Invoice({ invoice }) {
  // console.log(invoice);

  const { id, createdAt, clientName, total, status } = invoice;

  return (
    <div className="table-auto py-4 px-12 bg-white rounded-lg mb-5 shadow-normal flex items-center justify-between">
      <div className="text-veryDark font-bold text-md  flex-1">
        <span className="text-skyBlue">#</span>
        {id}
      </div>
      <div className=" flex-1 text-skyBlue text-normal font-500">
        {createdAt}
      </div>
      <div className=" flex-1 text-skyBlue text-normal font-500">
        {clientName}
      </div>
      <div className=" flex-1 text-veryDark font-bold text-md text-center">
        {formatCurrency(total)}
      </div>
      <div className="w-36">{<Status status={status} />}</div>
      <div className="ml-8 p-2">
        <Link>
          <Button>
            <img src={RArrow} alt="View Details" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Invoice;
