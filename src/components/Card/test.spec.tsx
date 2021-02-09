import React, {FunctionComponent, ReactNode} from "react"
import { render } from "@testing-library/react"
import Card, { Figure, Points } from './index';
import { COLORS } from './utils';

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

describe('<Card />', function () {
   test('should render circle card', function () {
       const { container } = render(<Card type="circle" color="yellow" points={3} />);

       const el = container.children[0]

       expect(el.tagName).toBe('svg');
       expect(el.children[0].tagName).toBe('rect');
       expect(el.children[1].tagName).toBe('text');
       expect(el.children[2].tagName).toBe('g');
       expect(el.children[2].getAttribute('fill')).toBe(COLORS.yellow);
       expect(el.children[2].children[0].tagName).toBe('circle');
       expect(el.children[3].children.length).toBe(3);
   });

    test('should render triangle card', function () {
        const { container } = render(<Card type="triangle" color="yellow" points={2} />);

        const el = container.children[0]

        expect(el.tagName).toBe('svg');
        expect(el.children[0].tagName).toBe('rect');
        expect(el.children[1].tagName).toBe('text');
        expect(el.children[2].tagName).toBe('g');
        expect(el.children[2].getAttribute('fill')).toBe(COLORS.yellow);
        expect(el.children[2].children[0].tagName).toBe('polygon');
        expect(el.children[3].children.length).toBe(2);
    });

    test('should render square card', function () {
        const { container } = render(<Card type="square" color="blue" points={1} />);

        const el = container.children[0]

        expect(el.tagName).toBe('svg');
        expect(el.children[0].tagName).toBe('rect');
        expect(el.children[1].tagName).toBe('text');
        expect(el.children[2].tagName).toBe('g');
        expect(el.children[2].getAttribute('fill')).toBe(COLORS.blue);
        expect(el.children[2].children[0].tagName).toBe('rect');
        expect(el.children[3].children.length).toBe(1);
    });

    test('should render cross card', function () {
        const { container } = render(<Card type="square" color="red" points={4} />);

        const el = container.children[0]

        expect(el.tagName).toBe('svg');
        expect(el.children[0].tagName).toBe('rect');
        expect(el.children[1].tagName).toBe('text');
        expect(el.children[2].tagName).toBe('g');
        expect(el.children[2].getAttribute('fill')).toBe(COLORS.red);
        expect(el.children[2].children[0].tagName).toBe('rect');
        expect(el.children[3].children.length).toBe(4);
    })
});