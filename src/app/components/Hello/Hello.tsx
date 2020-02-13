import * as React from 'react';
import * as PropTypes from 'prop-types';

import './hello.scss';

export interface HelloProps {
    compiler: string;
    framework: string;
}

const Hello: React.StatelessComponent<HelloProps> = ({ compiler, framework }) => {
    return (
        <h1>
            Hello from {compiler} and {framework}!
        </h1>
    );
};

Hello.propTypes = {
    compiler: PropTypes.string.isRequired,
    framework: PropTypes.string.isRequired,
};

export { Hello };
