import React from 'react';
import { Hello } from './Hello';

export default {
    title: 'Hello',
    component: Hello,
};

export const Default = (): React.ReactElement => <Hello compiler="typescript" framework="react" />;
