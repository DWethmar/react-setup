import React from 'react';
import { shallow } from 'enzyme';
import { Bye } from './Bye';

describe('Bye', () => {
    it('should match snapshot', () => {
        const component = shallow(<Bye name="programmer" />);

        expect(component).toMatchSnapshot();
    });
});
