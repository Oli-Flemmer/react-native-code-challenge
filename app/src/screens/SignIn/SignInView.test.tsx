import { render as testRender } from '@testing-library/react-native';
import SignInView from './SignInView';
import React from 'react';

const render = () => testRender(<SignInView authenticate={jest.fn()} />);

it('needs to be implemented', () => {
  expect(true).toBeTruthy()
});
