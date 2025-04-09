import { styled } from "styled-components";

export const BuyWrapper = styled.div`
  &.buy-wrapper {
    display: flex;
    gap: 20px;
  }
`;

export const BuyProducts = styled.div`
  &.buy-products {
    padding-top: 24px;
    padding-left: 20px;
    padding-bottom: 12px;
    background-color: #ffffff;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    margin-bottom: 12px;
  }
`;

export const BuyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 40px;
`;

export const MakeOrder = styled.div`
  padding: 24px 20px 20px 20px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    margin-bottom: 24px;
  }

  input {
    width: 100%;
    height: 48px;
    padding-left: 12px;
    background-color: rgba(246, 246, 246, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    outline: none;
  }

  input:focus {
    border: 1px solid #fc9b27;
  }

  small {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
  }

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0%;
    margin-top: 8px;
  }
`;
