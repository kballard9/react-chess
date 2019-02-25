import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Square} from './Square';

const LIGHT_SQUARE = '#f0d9b5';

describe('Square', () => {
  it('should render the white square', () => {
    const square = TestRenderer.create(<Square />).toJSON();
    expect(square.props.style.backgroundColor).toEqual(LIGHT_SQUARE);
  })

  it('should render the black square', () => {
    const square = TestRenderer.create(<Square black/>).toJSON();
   
    expect(square).toMatchSnapshot();
  })
})