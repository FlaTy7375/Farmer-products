import React from "react";
import FooterLogo from "../footer-logo/footer-logo";
import { StyledFooterWrapper } from "./styles";

export default function FooterWrapper() {
  return (
    <StyledFooterWrapper className="footer-wrapper">
      <FooterLogo></FooterLogo>
      <small>Создано 2021</small>
    </StyledFooterWrapper>
  );
}
