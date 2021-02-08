import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { PlayingField } from '../components'

interface IndexPageProps extends PageProps {

}

const cards = [
    { x: 0, y: 0, type: '', color: '' }
];

const IndexPage: FC<IndexPageProps> = () => {
    return (
        <PlayingField grid={7} cards={cards}>

        </PlayingField>
    );
}

export default IndexPage;