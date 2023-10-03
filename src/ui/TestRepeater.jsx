import React, { useState } from "react";

function RepeaterField() {
  // State to keep track of the repeated items
  const [items, setItems] = useState([]);

  // Function to add a new item
  const addItem = () => {
    setItems([
      ...items,
      {
        name: "",
        age: "",
        email: "",
        address: "",
      },
    ]);
  };

  // Function to remove an item by index
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  console.log(items);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {/* Input fields for name, age, email, and address */}
          <input
            type="text"
            placeholder="Name"
            value={item.name}
            onChange={(e) => {
              const updatedItem = { ...item, name: e.target.value };
              const updatedItems = [...items];
              updatedItems[index] = updatedItem;
              setItems(updatedItems);
            }}
          />
          <input
            type="number"
            placeholder="Age"
            value={item.age}
            onChange={(e) => {
              const updatedItem = { ...item, age: e.target.value };
              const updatedItems = [...items];
              updatedItems[index] = updatedItem;
              setItems(updatedItems);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={item.email}
            onChange={(e) => {
              const updatedItem = { ...item, email: e.target.value };
              const updatedItems = [...items];
              updatedItems[index] = updatedItem;
              setItems(updatedItems);
            }}
          />
          <input
            type="text"
            placeholder="Address"
            value={item.address}
            onChange={(e) => {
              const updatedItem = { ...item, address: e.target.value };
              const updatedItems = [...items];
              updatedItems[index] = updatedItem;
              setItems(updatedItems);
            }}
          />
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default RepeaterField;
