/* eslint-disable react/prop-types */
import Button from "./Button";
import iconPlus from "../assets/icon-plus.svg";
import iconDelete from "../assets/icon-delete.svg";

function AddItems({ items, setItems }) {
  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
    calculateTotal(index);
  };

  const calculateTotal = (index) => {
    const updatedItems = [...items];
    const item = updatedItems[index];
    item.total = item.quantity * item.price;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        itemName: "",
        quantity: "",
        price: "",
        total: 0,
      },
    ]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.length > 0 && (
        <div id="heading" className="flex justify-between items-center mb-3">
          <div className="basis-[40%]">Item Name</div>
          <div className="basis-[10%]">QTY.</div>
          <div className="basis-[20%]">Price</div>
          <div className="basis-[20%]">Total</div>
          <div></div>
        </div>
      )}
      {items.map((item, index) => (
        <div key={index} className="">
          <div className="flex justify-between items-center mb-3">
            <div className="basis-[40%]">
              <input
                type="text"
                id="itemName"
                value={item.itemName}
                onChange={(e) =>
                  handleInputChange(index, "itemName", e.target.value)
                }
                placeholder="Front End Development"
                className="border rounded-lg py-3 px-4 border-lightAsh hover:border-brand active:border-brand w-full"
              />
            </div>
            <div className="basis-[10%]">
              <input
                type="number"
                id="quantity"
                value={item.quantity}
                onChange={(e) =>
                  handleInputChange(index, "quantity", e.target.value)
                }
                placeholder="1"
                className="border rounded-lg py-3 px-4 border-lightAsh hover:border-brand active:border-brand w-full"
              />
            </div>
            <div className="basis-[20%]">
              <input
                type="number"
                id="price"
                value={item.price}
                onChange={(e) =>
                  handleInputChange(index, "price", e.target.value)
                }
                placeholder="100"
                className="border rounded-lg py-3 px-4 border-lightAsh hover:border-brand active:border-brand w-full"
              />
            </div>
            <div className="basis-[20%]">
              <input
                type="number"
                id="total"
                disabled
                value={item.total}
                placeholder="135"
                className="py-3 px-4 bg-white font-bold w-full"
              />
            </div>
            <div>
              <img src={iconDelete} alt="X" onClick={() => removeItem(index)} />
            </div>
          </div>
        </div>
      ))}
      <Button variation="ghost" className="mt-5" onClick={addItem}>
        <span>
          <img src={iconPlus} alt="+" className="mr-2" />
        </span>
        Add New Item
      </Button>
    </div>
  );
}

export default AddItems;
