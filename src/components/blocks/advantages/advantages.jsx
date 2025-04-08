import React from "react";
import Title from "/src/components/ui/title/title";
import Card from "/src/components/ui/card/card";
import Button from "/src/components/ui/button/button";
import {
  AdvantagesSection,
  StyledCardList,
  StyledCardsWrapper,
} from "./styles";

export default function Advantages({ cards, descriptions }) {
  const cardsList = cards.map((card, index) => ({
    ...card,
    ...descriptions[index], // Объединяем карточку и описание
  }));

  return (
    <AdvantagesSection className="advantages">
      <Title className="advantages-title">
        Почему фермерские продукты лучше?
      </Title>
      <StyledCardsWrapper className="cards-wrapper">
        <StyledCardList className="card-list">
          {cardsList
            .filter((card) => card.id < 2)
            .map((card) => {
              return <Card {...card} key={card.id}></Card>;
            })}
        </StyledCardList>
        <StyledCardList className="card-list">
          {cardsList
            .filter((card) => card.id > 1)
            .map((card) => {
              return <Card {...card} key={card.id}></Card>;
            })}
        </StyledCardList>
      </StyledCardsWrapper>
      <Button path="shop" className="advantages-button">
        Купить
      </Button>
    </AdvantagesSection>
  );
}
