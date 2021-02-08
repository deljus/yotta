import React from 'react';
import ThemeProvider from './src/theme';

export const wrapPageElement = ({ element }) => (
    <ThemeProvider>{ element }</ThemeProvider>
);