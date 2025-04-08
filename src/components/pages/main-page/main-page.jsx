import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";
import { textWrap, cardList } from "../../../mocks/mock";
import { StyledMain } from "./styles";

export default function MainPage() {
  return (
    <StyledMain>
      <About></About>
      <Advantages descriptions={textWrap} cards={cardList}></Advantages>
    </StyledMain>
  );
}
