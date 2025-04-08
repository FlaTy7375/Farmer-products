import React from "react";
import FooterWrapper from "./footer-wrapper/footer-wrapper";
import { StyledFooter, FooterContainer } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterWrapper></FooterWrapper>
      </FooterContainer>
    </StyledFooter>
  );
}
