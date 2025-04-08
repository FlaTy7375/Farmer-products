import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 60px;
  background-color: #fc9b27;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
  border: none;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  &.advantages-button {
    margin: ${(props) => props.theme.centerAlign};
  }

  &.buy-button {
    width: 100%;
    margin-top: 32px;
  }

  &.main--page__link {
    width: 74px;
    height: 27px;
    color: #000000;
    background-color: transparent;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
  }

  &.main--page__link:hover {
    color: grey;
    background-color: transparent;
    box-shadow: none;
  }

  &.main--page__link:active {
    color: orange;
    background-color: transparent;
    box-shadow: none;
  }

  &:hover {
    background-color: #fc7427;
    box-shadow: 0px 4px 0px 0px #00000024 inset;
  }

  &:active {
    background-color: #fc7427;
    box-shadow: none;
  }

  &:disabled {
    background-color: grey;
  }
`;
