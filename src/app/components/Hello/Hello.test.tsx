import React from 'react';
import { shallow } from 'enzyme';
import { Hello } from './Hello';

describe('Hello', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Hello compiler="typescript" framework="react" />);

        expect(component).toMatchSnapshot();
    });
});
