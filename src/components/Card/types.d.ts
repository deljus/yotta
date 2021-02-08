import {ReactNode} from "react";

export type CardType = 'circle' | 'triangle' | 'square' | 'cross';
export type CardColor = 'yellow' | 'red' | 'blue' | 'green';
export type CardPoints =  1 | 2 | 3 | 4;

export interface CardProps {
    type: CardType;
    color: CardColor;
    points: CardPoints
}

export interface FigureProps{
    type: CardType;
    r: number;
    x: number;
    y: number;
    dataTestId?: string;
}

export interface PointProps{
    type: CardType;
    points: CardPoints;
    r: number;
    dataTestId?: string;
}