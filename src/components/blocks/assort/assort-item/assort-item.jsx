import React, { useState } from "react";
import { Description, Сharacteristics, Properties } from "../assort-tabs";
import { StyledItem, ItemWrapper } from "./styles";

export default function AssortItem(props) {
  const {
    title,
    description,
    price,
    img,
    weight,
    lifeTime,
    species,
    producer,
    energyValue,
    nutritionalValue,
  } = props;

  const assortTabs = [
    {
      content: <Description price={price}>{description}</Description>,
    },
    {
      content: (
        <Сharacteristics
          weight={weight}
          lifeTime={lifeTime}
          species={species}
          producer={producer}
        />
      ),
    },
    {
      content: (
        <Properties
          energyValue={energyValue}
          nutritionalValue={nutritionalValue}
        />
      ),
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <StyledItem>
      <img src={img} width={248} height={248} />
      <ItemWrapper className="item-wrapper">
        <h1>{title}</h1>
        <div className="btn-wrapper">
          <button
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabChange(0)}
          >
            Описание
          </button>
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabChange(1)}
          >
            Характеристики
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabChange(2)}
          >
            Свойства
          </button>
        </div>
        {assortTabs[activeTab].content}
      </ItemWrapper>
    </StyledItem>
  );
}
