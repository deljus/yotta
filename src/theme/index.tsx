import React, {FC, ReactNode} from 'react';
import { ThemeProvider as BaseThemeProvider, Global } from '@emotion/react';
import * as theme from './theme';
import global from './global';

interface ThemeProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProps> = ({ children }) => (
    <BaseThemeProvider theme={theme}>
        <Global styles={global} />
            {children}

    </BaseThemeProvider>
);

export default ThemeProvider;