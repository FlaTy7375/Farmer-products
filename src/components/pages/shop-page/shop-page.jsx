import React from "react";
import Buy from "../../blocks/buy/buy";
import Assort from "../../blocks/assort/assort";
import { ShopAssort } from "./styles";
import { checkboxList } from "/src/mocks/checkbox";
import { assortList, characteristicsList, PriceList } from "/src/mocks/assort";

export default function ShopPage() {
  return (
    <>
      <ShopAssort className="shop-page">
        <div className="shop-wrapper">
          <Buy checkboxList={checkboxList} PriceList={PriceList}></Buy>
          <Assort
            characteristicsList={characteristicsList}
            assortList={assortList}
          ></Assort>
        </div>
      </ShopAssort>
    </>
  );
}
