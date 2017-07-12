import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './index';

// Uncomment to see compiled body of App function (component)
// console.log(App.toString());

describe('App', () => {
    it('should render without exploding', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.length).to.equal(1);
        expect(wrapper.find('h1').text()).to.equal('App');
    });
});
