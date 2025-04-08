import { styled } from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 540px;

  &::after {
    z-index: 1;
    content: "";
    position: absolute;
    display: block;
    top: 20px;
    left: 20px;
    width: 56px;
    height: 56px;
    background-image: ${(props) => `url(${props.$img})`};

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const CardName = styled.div`
  margin-left: 72px;
  margin-bottom: 20px;

  .card-title {
    margin-top: 4px;
  }
`;

export const StyledElement = styled.li`
  &.farmer-card {
    background-color: #e1edce;
  }

  &.shop-card {
    background-color: #f8ddd7;
  }
`;

export const Paragraph = styled.p`
  &.farmer-product {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    min-width: 178px;
    height: 25px;
    padding: 0 10px;
    background-color: #88aa4d;
    color: #ffffff;
  }

  &.shop-product {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    min-width: 150px;
    height: 25px;
    padding: 0 10px;
    background-color: #f75531;
    color: #ffffff;
  }
`;
