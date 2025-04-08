import React from "react";
import { StyledTitle } from "./styles";

export default function Title({ children, className }) {
  return <StyledTitle className={className}>{children}</StyledTitle>;
}
