import React from "react";
import { StyledButton } from "./styles";

export default function Button({
  className,
  onClick,
  disabled,
  children,
  method,
  path,
}) {
  return (
    <StyledButton
      as={method}
      to={path}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}
