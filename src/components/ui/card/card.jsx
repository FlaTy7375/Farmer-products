import React from "react";
import Title from "../title/title";
import { CardWrapper, CardName, StyledElement, Paragraph } from "./style";

export default function Card({ title, text, parentName, mark, name, img }) {
  return (
    <StyledElement className={`card ${parentName}`}>
      <CardWrapper $img={img}>
        <CardName>
          <Paragraph className={`${name}`}>{mark}</Paragraph>
          <Title className="card-title">{title}</Title>
        </CardName>
        <p>{text}</p>
      </CardWrapper>
    </StyledElement>
  );
}
