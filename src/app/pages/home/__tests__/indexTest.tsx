import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import Home from '../index.tsx';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Layout', () => {
    it('should exist', () => {
        expect(Home).toBeDefined();
    });

    it('should render', () => {
        Enzyme.shallow(<Home />);
    });

    it('should be properly rendered', () => {
        const wrapper = Enzyme.mount(<BrowserRouter><Home /></BrowserRouter>);

        expect(wrapper.find('h1').contains('Eser Ozvataf')).toEqual(true);
    });
});
