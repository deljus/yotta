import React, { FC, useCallback } from 'react';
import { Container, CardsContainer } from './elements';
import { useCardProportion } from "@hooks";
import Card from '../Card';

interface CardType {
    x: number;
    y: number;
    color: string;
    type: string;
}

interface PlayingFieldProps {
    grid: number;
    cards: Array<CardType>;
}

const PlayingField: FC<PlayingFieldProps> = ({ grid, cards }) => {
    const [proportion, refContainer] = useCardProportion(grid);

    useCallback(() => {

    }, [cards, proportion]);

    return (
        <Container ref={refContainer}>
            <Card type="circle" color="yellow" points={1} />
            <Card type="triangle" color="green" points={2} />
            <Card type="square" color="red" points={3} />
            <Card type="cross" color="blue" points={4} />
            <Card type="triangle" color="green" points={1} />
            <Card type="square" color="red" points={3} />
            <Card type="cross" color="blue" points={2} />
        </Container>
    )
};

export default PlayingField;