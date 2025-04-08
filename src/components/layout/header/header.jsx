import React from "react";
import Nav from "../nav/nav";
import { StyledHeader, HeaderWrapper } from "./styles";
import { useLocation } from "react-router-dom";

export default function Header() {
  const pageUrl = useLocation().pathname;

  const returnButton = () => {
    switch (pageUrl) {
      case "/":
        return <Nav path="shop">Купить</Nav>;
      case "/shop":
        return (
          <Nav path="/" className="main--page__link">
            Главная
          </Nav>
        );
    }
  };

  return (
    <StyledHeader>
      <HeaderWrapper>{returnButton()}</HeaderWrapper>
    </StyledHeader>
  );
}
