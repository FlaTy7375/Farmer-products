import React from "react";
import Title from "../../ui/title/title";
import { AboutSection, AboutWrapper, AboutDescription } from "./styles";
import { ReactComponent as Ellipse } from "/src/assets/ellipse.svg";
import { ReactComponent as AboutImg } from "/src/assets/about-img.svg";

export default function About() {
  return (
    <AboutSection className="about">
      <AboutWrapper className="about-wrapper">
        <AboutDescription className="about-description">
          <Title className="about-title">
            Магазин фермерских продуктов с доставкой
          </Title>
          <p>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </p>
        </AboutDescription>
      </AboutWrapper>
    </AboutSection>
  );
}
