import React from "react";
import Title from "../../../ui/title/title";
import { StyledHeaderLogo } from "./styles";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";

export default function HeaderLogo() {
  return (
    <StyledHeaderLogo className="header-logo">
      <LogoImg />
      <Title className="header-title">Фермерские продукты</Title>
    </StyledHeaderLogo>
  );
}
