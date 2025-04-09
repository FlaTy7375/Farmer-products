import React from "react";
import Title from "../../../ui/title/title";
import { StyledHeaderLogo } from "./styles";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <StyledHeaderLogo as={Link} to="/" className="header-logo">
      <LogoImg />
      <Title className="header-title">Фермерские продукты</Title>
    </StyledHeaderLogo>
  );
}
