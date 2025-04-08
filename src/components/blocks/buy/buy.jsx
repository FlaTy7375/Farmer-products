import React, { useState } from "react";
import ProductItem from "./product-item/product-item";
import Button from "/src/components/ui/button/button";
import { BuyWrapper, BuyProducts, BuyForm, MakeOrder } from "./styles";

export default function Buy({ checkboxList, PriceList }) {
  const List = checkboxList.map((checkbox, index) => ({
    ...checkbox,
    ...PriceList[index],
  }));

  const [titleList, setTitle] = useState(new Set());
  const [price, setPrice] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const isDisabled = titleList.size === 0 || inputValue === "";

  const onChangeChekbox = (isChecked, priceValue, title) => {
    setPrice((prevPrice) => {
      if (isChecked) {
        setTitle((prevList) => new Set(prevList).add(title));
        return prevPrice + priceValue;
      } else {
        setTitle((prevList) => {
          const newList = new Set(prevList);
          newList.delete(title);
          return newList;
        });
        return prevPrice - priceValue;
      }
    });
  };

  const handleBuy = () => {
    const products = [...titleList].join(", ");
    alert(`
      Спасибо за покупку.
      Вы приобрели продукты ${products} на цену: ${price} руб.
      Мы доставим их по адресу ${inputValue}.
      `);
  };

  return (
    <section>
      <BuyWrapper className="buy-wrapper">
        <BuyForm>
          <BuyProducts className="buy-products">
            <h1>Выберите продукты</h1>
            <ul>
              {List.map((checkbox) => {
                return (
                  <ProductItem
                    key={checkbox.id}
                    onChange={onChangeChekbox}
                    {...checkbox}
                  ></ProductItem>
                );
              })}
            </ul>
          </BuyProducts>
          <MakeOrder>
            <h1>Сделать заказ</h1>
            <input
              value={inputValue}
              onChange={(evt) => setInputValue(evt.target.value)}
              placeholder="Введите адрес доставки"
            />
            <small>Цена</small>
            <p>{price} руб.</p>
            <Button
              className="buy-button"
              type="submit"
              onClick={handleBuy}
              disabled={isDisabled}
            >
              Купить
            </Button>
          </MakeOrder>
        </BuyForm>
      </BuyWrapper>
    </section>
  );
}
