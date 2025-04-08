import { styled } from "styled-components";

export const AdvantagesSection = styled.section`
    padding: 100px 90px;
`;

export const StyledCardList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const StyledCardsWrapper = styled.div`
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 64px;

    li {
        min-height: 197px;
    }
`;
