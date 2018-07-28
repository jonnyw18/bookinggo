import React from 'react';
import Input from '../Input';
import { shallow } from 'enzyme';

describe('<Input />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow( <Input /> )
        expect(wrapper).toEqual(true)
    })
})