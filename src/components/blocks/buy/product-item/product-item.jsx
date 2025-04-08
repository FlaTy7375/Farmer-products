import React from "react";
import { useState } from "react";
import { SelectProduct } from "./styles";

export default function ProductItem({ title, id, priceValue, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SelectProduct className="selecte-product">
      <label htmlFor={id}>{title}</label>
      <input
        className="product-checkbox"
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onChange(!isChecked, priceValue, title);
        }}
      />
    </SelectProduct>
  );
}
