import { useState } from "react";
import AddItems from "./AddItems";

function InvoiceForm() {
  // const [items, setItems] = useState({});
  const [items, setItems] = useState([
    {
      itemName: "",
      quantity: "",
      price: "",
      total: 0,
    },
  ]);

  return (
    <section className="p-10">
      <h3 className="text-veryDark text-xl font-bold mb-10">New Invoice</h3>

      <div id="sender" className="mb-10">
        <p className="text-brand mb-3 font-bold">Bill From</p>
        <div className="flex flex-col mb-5">
          <label htmlFor="sStreet" className="block text-skyBlue mb-1">
            {" "}
            Street Address
          </label>
          <input
            type="text"
            id="sStreet"
            placeholder="19 Union Terrance"
            className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
          />
        </div>
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <label htmlFor="sCity" className="block text-skyBlue mb-1">
              {" "}
              City
            </label>
            <input
              type="text"
              id="sCity"
              placeholder="London"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sPostCode" className="block text-skyBlue mb-1">
              Post Code
            </label>
            <input
              type="text"
              id="sPostCode"
              placeholder="E1 3EZ"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sCountry" className="block text-skyBlue mb-1">
              Country
            </label>
            <input
              type="text"
              id="sCountry"
              placeholder="United Kingdom"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            />
          </div>
        </div>
      </div>

      <div id="client" className="mb-10">
        <p className="text-brand mb-3 font-bold">Bill To</p>
        <div className="flex flex-col mb-5">
          <label htmlFor="name" className="block text-skyBlue mb-1">
            {" "}
            Client's name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Alex Grim"
            className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="block text-skyBlue mb-1">
            {" "}
            Client's Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="alexgrim@testmail.com"
            className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="cStreet" className="block text-skyBlue mb-1">
            {" "}
            Street Address
          </label>
          <input
            type="text"
            id="cStreet"
            placeholder="19 Union Terrance"
            className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
          />
        </div>
        <div className="flex justify-between mb-5 ">
          <div className="flex flex-col">
            <label htmlFor="cCity" className="block text-skyBlue mb-1">
              {" "}
              City
            </label>
            <input
              type="text"
              id="cCity"
              placeholder="London"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cPostCode" className="block text-skyBlue mb-1">
              Post Code
            </label>
            <input
              type="text"
              id="cPostCode"
              placeholder="E1 3EZ"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cCountry" className="block text-skyBlue mb-1">
              Country
            </label>
            <input
              type="text"
              id="cCountry"
              placeholder="United Kingdom"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            />
          </div>
        </div>
        <div className="flex justify-between mb-5 ">
          <div className="flex flex-col">
            <label htmlFor="createdAt" className="block text-skyBlue mb-1">
              {" "}
              Invoice Date
            </label>
            <input
              type="date"
              id="createdAt"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="paymentDue" className="block text-skyBlue mb-1">
              Payment Due
            </label>
            <select
              type="text"
              id="paymentDue"
              placeholder="E1 3EZ"
              className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
            >
              <option value="3">Next 3 Days</option>
              <option value="7">Next 7 Days</option>
              <option value="15">Next 15 Days</option>
              <option value="21">Next 21 Days</option>
              <option value="30">Next 30 Days</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <label htmlFor="description" className="block text-skyBlue mb-1">
            {" "}
            Project Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Front End Development"
            className="border rounded-lg py-2 px-3 border-lightAsh hover:border-brand active:border-brand"
          />
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg text-skyBlue font-bold mb-5">Items List</h4>

          {/* {addTask && (
            <div id="items" className="">
              <div
                id="heading"
                className="flex justify-between items-center mb-3"
              >
                <div className="basis-[40%]">Item Name</div>
                <div className="basis-[10%]">QTY.</div>
                <div className="basis-[20%]">Price</div>
                <div className="basis-[20%]">Total</div>
                <div></div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="basis-[40%]">
                  <input
                    type="text"
                    id="itemName"
                    placeholder="Front End Development"
                    className="border rounded-lg py-3 px-4 border-lightAsh hover:border-brand active:border-brand w-full"
                  />
                </div>
                <div className="basis-[10%]">
                  <input
                    type="number"
                    id="quantity"
                    placeholder="1"
                    className="border rounded-lg py-3 px-4 border-lightAsh hover:border-brand active:border-brand w-full"
                  />
                </div>
                <div className="basis-[20%]">
                  <input
                    type="number"
                    id="price"
                    placeholder="135"
                    className="border rounded-lg py-3 px-4 border-lightAsh hover:border-brand active:border-brand w-full"
                  />
                </div>
                <div className="basis-[20%]">135</div>
                <div>
                  <img src={iconDelete} alt="X" />
                </div>
              </div>
            </div>
          )}
          <Button
            variation="ghost"
            className="mt-5"
            onClick={() => setAddTask(true)}
          >
            <span>
              <img src={iconPlus} alt="+" className="mr-2" />
            </span>
            Add New Item
          </Button> */}
          <AddItems items={items} setItems={setItems} />
          {/* <RepeaterField /> */}
        </div>
      </div>
    </section>
  );
}

export default InvoiceForm;
