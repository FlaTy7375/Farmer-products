import React from "react";
import Title from "../../../ui/title/title";
import { StyledFooterLogo } from "./styles";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";

export default function FooterLogo() {
  return (
    <StyledFooterLogo className="footer-logo">
      <LogoImg />
      <Title className="footer-title">Фермерские продукты</Title>
    </StyledFooterLogo>
  );
}
