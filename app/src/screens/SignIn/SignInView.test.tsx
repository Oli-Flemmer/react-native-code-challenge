import { render as testRender, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInView from './SignInView';
import React from 'react';
import { Credentials } from './SignInContainer';

const credentialTrue: Credentials = {
	username: 'user',
	password: 'password',
	dateOfBirth: new Date(2000, 0, 1)
}
const credentialfalse: Credentials = {
	username: 'user',
	password: 'password',
	dateOfBirth: new Date(2001, 0, 1)
}

describe('signintest', () => {

	const authenticate = (credentials: Credentials): boolean => {
		if (credentials.username !== 'user') return false
		if (credentials.password !== 'password') return false
		if (new Date(credentials.dateOfBirth).toLocaleDateString() !== new Date(2000, 0, 1).toLocaleDateString()) return false
		return true;
	};


	const render = () => testRender(<SignInView authenticate={authenticate} />);

	expect(true).toBeTruthy();

	render();


	const usernameTextInput = screen.getByTestId('username');
	const passwordTextInput = screen.getByTestId('password')

	fireEvent.changeText(usernameTextInput, "user");
	fireEvent.changeText(passwordTextInput, "password");

	test("With Right Credentails", () => {
		const mock = jest.fn(() => authenticate(credentialTrue));

		expect(mock()).toBe(true);
		expect(mock).toBeCalledTimes(1);
	});

	test("With Right Credentails", () => {
		const mock = jest.fn(() => authenticate(credentialfalse));

		expect(mock()).toBe(false);
		expect(mock).toBeCalledTimes(1);
	});


});



