import React, {FunctionComponent, ReactNode} from "react"
import { render } from "@testing-library/react"
import { Figure, Points } from './index';

const wrapSVGElements = (element: ReactNode) => {
    return (
        <svg>
            {element}
        </svg>
    )
}

describe('<Figure />', () => {
    test('should render circle', function () {
        const { getByTestId } = render(wrapSVGElements(<Figure x={50} y={50} type="circle" r={3} dataTestId="circle-container" />));

        expect(getByTestId('circle-container').tagName).toBe('circle');
        expect(getByTestId('circle-container')).toHaveClass('circle');
    });

    test('should render triangle', function () {
        const { getByTestId } = render(wrapSVGElements(<Figure x={50} y={50} type="triangle" r={3} dataTestId="triangle-container" />));

        expect(getByTestId('triangle-container').tagName).toBe('polygon');
        expect(getByTestId('triangle-container')).toHaveClass('triangle');
    });

    test('should render square', function () {
        const { getByTestId } = render(wrapSVGElements(<Figure x={50} y={50} type="square" r={3} dataTestId="square-container" />));

        expect(getByTestId('square-container').tagName).toBe('rect');
        expect(getByTestId('square-container')).toHaveClass('square');
    });

    test('should render cross', function () {
        const { getByTestId } = render(wrapSVGElements(<Figure x={50} y={50} type="cross" r={3} dataTestId="cross-container" />));

        expect(getByTestId('cross-container').tagName).toBe('g');
        expect(getByTestId('cross-container').childElementCount).toBe(2);
        expect(getByTestId('cross-container').children[0].tagName).toBe('rect');
        expect(getByTestId('cross-container').children[1].tagName).toBe('rect');
    });
});

describe('<Points />', () => {
    test('should render one child', function () {
        const { container } = render(wrapSVGElements(<Points r={3} points={1} type="circle" />));

        expect(container.children[0].childElementCount).toBe(1);
    });

    test('should render two child', function () {
        const { container } = render(wrapSVGElements(<Points r={3} points={2} type="circle" />));

        expect(container.children[0].childElementCount).toBe(2);
    });

    test('should render three child', function () {
        const { container } = render(wrapSVGElements(<Points r={3} points={3} type="circle" />));

        expect(container.children[0].childElementCount).toBe(3);
    });

    test('should render four child', function () {
        const { container } = render(wrapSVGElements(<Points r={3} points={4} type="circle" />));

        expect(container.children[0].childElementCount).toBe(4);
    });
});