import React from "react";
import Title from "../../../ui/title/title";
import { StyledFooterLogo } from "./styles";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

export default function FooterLogo() {
  return (
    <StyledFooterLogo as={Link} to="/" className="footer-logo">
      <LogoImg />
      <Title className="footer-title">Фермерские продукты</Title>
    </StyledFooterLogo>
  );
}
