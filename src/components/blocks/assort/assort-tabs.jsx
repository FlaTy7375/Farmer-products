import React from "react";
import { StyledUl } from "./assort-item/styles";

export function Description({ children, price }) {
  return (
    <>
      <p>{children}</p>
      <article>{price}</article>
    </>
  );
}

export function Сharacteristics({ weight, lifeTime, species, producer }) {
  return (
    <StyledUl className="characteristics-list">
      <li className="characteristics-item">
        <p className="characteristics-title">Масса:</p>
        <span>{weight}</span>
      </li>
      <li className="characteristics-item">
        <p className="characteristics-title">Срок годности:</p>
        <span>{lifeTime}</span>
      </li>
      <li className="characteristics-item">
        <p className="characteristics-title">Порода:</p>
        <span>{species}</span>
      </li>
      <li className="characteristics-item">
        <p className="characteristics-title">Место происхождения:</p>
        <span>{producer}</span>
      </li>
    </StyledUl>
  );
}

export function Properties({ energyValue, nutritionalValue }) {
  return (
    <>
      <StyledUl className="characteristics-list">
        <li className="characteristics-item">
          <p className="characteristics-title">Энергетическая ценность:</p>
          <span>{energyValue}</span>
        </li>
        <li className="characteristics-item">
          <p className="characteristics-title">Пищевая ценность:</p>
          <span>{nutritionalValue}</span>
        </li>
      </StyledUl>
    </>
  );
}
