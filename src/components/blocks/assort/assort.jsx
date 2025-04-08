import React from "react";
import { AssortWrapper, StyledAssort } from "./styles";
import AssortItem from "./assort-item/assort-item";

export default function Assort({ assortList, characteristicsList }) {
  const List = assortList.map((item, index) => ({
    ...item,
    ...characteristicsList[index],
  }));

  return (
    <StyledAssort>
      <AssortWrapper className="assort-wrapper">
        <ul className="assort-list">
          {List.map((item) => {
            return <AssortItem key={item.id} {...item} />;
          })}
        </ul>
      </AssortWrapper>
    </StyledAssort>
  );
}
