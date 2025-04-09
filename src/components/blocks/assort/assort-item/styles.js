import { styled } from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  padding: 20px;
  max-width: 727px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);

  img {
    object-fit: cover;
  }
`;

export const ItemWrapper = styled.div`
  padding-left: 20px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0%;
  }

  .btn-wrapper {
    display: flex;
    gap: 8px;
    margin: 16px 0;
  }

  button {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    padding: 8px 12px;
    background-color: rgba(246, 246, 246, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .active {
    background-color: rgba(136, 170, 77, 1);
    color: #ffffff;
  }

  p {
    width: 419px;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    background-color: rgba(216, 236, 254, 1);
    width: 140px;
    height: 29px;
    margin-top: 12px;
  }
`;

export const StyledUl = styled.ul`
  &.characteristics-list {
    margin-top: 20px;
    display: flex;
    gap: 8px;
    width: 419px;
  }

  .characteristics-item {
    display: flex;
    flex-wrap: wrap;
  }

  .characteristics-title {
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    width: auto;
    margin-right: 5px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
  }
`;
