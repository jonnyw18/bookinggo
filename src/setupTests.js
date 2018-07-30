import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';


// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serializer format.
expect.addSnapshotSerializer(createSerializer({ mode: 'deep'}));

Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;