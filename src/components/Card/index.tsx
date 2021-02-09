import React, { FC } from 'react';
import { CardProps, PointProps, FigureProps } from './types';
import { COLORS } from './utils';

const COS_25 = Math.cos(25 * Math.PI / 180);
const SIN_50 = Math.sin(50 * Math.PI / 180);
const DIM_CROSS = 0.5;

export const Figure: FC<FigureProps> = ({ type , r, x, y, dataTestId}) => {
    if(type === 'circle') {
        return <circle data-testid={dataTestId} className={type} r={r} cx={x} cy={y} />
    }
    if(type === 'triangle') {
        return <polygon data-testid={dataTestId}  points={`${x}, ${y - r} ${x - COS_25 * r}, ${y + SIN_50 * r} ${x + COS_25 * r}, ${y + SIN_50 * r}` } className={type}/>
    }
    if(type === 'square') {
        return  <rect data-testid={dataTestId}  x={x - r} y={y - r} width={2 * r} height={2 * r} className={type} />
    }

    return (
        <g data-testid={dataTestId}>
            <rect x={x - r} y={y - r * DIM_CROSS} width={2 * r} height={2 * r * DIM_CROSS} className={type} />
            <rect x={x - r * DIM_CROSS} y={y - r} width={2 * r * DIM_CROSS} height={2 * r} className={type} />
        </g>
    )
}

export const Points: FC<PointProps> = ({ points, type, r}) => {
    if(points === 1) {
        return <Figure type={type} r={r} x={50} y={50} />
    }
    if(points === 2) {
        return (
            <>
                <Figure type={type} r={r} x={50 - 2 * r} y={50} />
                <Figure type={type} r={r} x={50 + 2 * r} y={50} />
            </>
        )
    }
    if(points === 3) {
        return (
            <>
                <Figure type={type} r={r} x={50 - 2 * r} y={50 - 2 * r} />
                <Figure type={type} r={r} x={50 + 2 * r} y={50 - 2 * r} />
                <Figure type={type} r={r} x={50} y={50 + 2 * r} />
            </>
        )
    }

    return (
        <>
            <Figure type={type} r={r} x={50 - 2 * r} y={50 - 2 * r} />
            <Figure type={type} r={r} x={50 + 2 * r} y={50 - 2 * r} />
            <Figure type={type} r={r} x={50 - 2 * r} y={50 + 2 * r} />
            <Figure type={type} r={r} x={50 + 2 * r} y={50 + 2 * r} />
        </>
    )
}

const Card: FC<CardProps> = ({ type, color, points }) => (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
        <rect x="5" y="5" width="90" height="90" className={type} stroke={COLORS[color]} fill="white" rx="10" />
        <text x={82} y={20} fill={COLORS[color]} fontSize="0.6rem">{points}</text>
        <g fill={COLORS[color]}>
            <Figure type={type} r={30} x={50} y={50}/>
        </g>
        <g fill="white">
            <Points type={type} points={points} r={3} />
        </g>
    </svg>
)

export default Card;