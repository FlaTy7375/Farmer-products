import { styled } from "styled-components";

export const SelectProduct = styled.li`
  &.selecte-product {
    display: flex;
    padding-right: 20px;
    min-height: 56px;
    min-width: 333px;
    justify-content: space-between;
    align-items: center;
  }

  label {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #333333;
    cursor: pointer;
  }

  .product-checkbox {
    position: relative;
    width: 24px;
    height: 24px;
    background-color: #fc9b27;
  }

  .product-checkbox::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 24px;
    background-color: rgba(246, 246, 246, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .product-checkbox:checked::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fc9b27;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
