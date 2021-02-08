import React, {useEffect, useRef, useState} from 'react';

const useCardProportion = (grid: number): [number, React.Ref<HTMLDivElement>] => {
    const refContainer = useRef<HTMLDivElement>(null);
    const [proportion, setProportion] = useState(0);

    useEffect(() => {
        if(refContainer.current) {
            const { width, height } = refContainer.current.getBoundingClientRect();
            const min = Math.min(width, height);
            const proportion = Math.floor(min / grid);
            setProportion(proportion);
        }
    }, [refContainer]);

    return [proportion, refContainer]
};

export default useCardProportion;