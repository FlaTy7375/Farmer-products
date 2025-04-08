import React from "react";
import HeaderLogo from "../header/header-logo/header-logo";
import Button from "../../ui/button/button";
import { StyledNav } from "./styles";

export default function Nav({ children, className, path }) {
  return (
    <StyledNav>
      <HeaderLogo></HeaderLogo>
      <Button className={className} path={path}>
        {children}
      </Button>
    </StyledNav>
  );
}
