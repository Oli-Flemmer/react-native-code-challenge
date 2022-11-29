import React from 'react';
import Primary, { PrimaryProps } from './primary';
import { fireEvent, render as testRender, screen } from '@testing-library/react-native';
import { Screen } from '@react-navigation/elements';



it('renders correctly', () => {
	const onPress = jest.fn();
	const render = (props?: Partial<PrimaryProps>) =>
		testRender(<Primary text="text" onPress={() => onPress()} {...props} />);
	const { getByText } = render();
	expect(getByText('text')).toBeTruthy();
	fireEvent.press(getByText("text"));
	expect(onPress).toBeCalledTimes(1);

});
