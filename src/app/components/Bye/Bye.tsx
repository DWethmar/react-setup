import * as React from 'react';
import * as PropTypes from 'prop-types';

import './Bye.scss';

export interface ByeProps {
    name: string;
}

const Bye: React.StatelessComponent<ByeProps> = ({ name }) => {
    return <h1>Bye {name}!</h1>;
};

Bye.propTypes = {
    name: PropTypes.string.isRequired,
};

export { Bye };
