import { styled } from "styled-components";
import Ellipse from "/src/assets/ellipse.svg";
import AboutImg from "/src/assets/about-img.svg";

export const AboutSection = styled.section`
  position: relative;
  background-color: #d8ecfe;
  width: 1280px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 76px;
    right: 90px;
    width: 446px;
    height: 447px;
    background-image: url(${Ellipse});
  }

  &::before {
    z-index: 1;
    content: "";
    position: absolute;
    display: block;
    top: 36px;
    right: 177px;
    width: 273px;
    height: 627px;
    background-image: url(${AboutImg});
    background-repeat: no-repeat;
  }
`;

export const AboutWrapper = styled.div`
  &.about-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 183px 90px;
  }
`;

export const AboutDescription = styled.div`
  &.about-description {
    width: 637px;
  }

  &.about-description p {
    width: 538px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
  }

  &.about-description .about-title {
    margin-bottom: 24px;
  }
`;
