import React from 'react'
import { render, screen } from '@testing-library/react-native';
import Card, { Props } from '.';
import { IResturant } from 'app/src/screens/AuthenticatedIndex/AuthenticatedIndex';


// afterEach(cleanup)

const resturant: IResturant = {
	id: 2,
	name: 'testName',
	location: {
		state: 'teststate',
		street: '123247'
	},
	logo_url: 'http://test.com/png',
	cuisines: ["cuisines"],
	ratings: {
		star_rating: 5
	}
}


describe('renders correctly of Card of Resturant', () => {

	render(<Card data={resturant} />)
	const { getByText, queryByTestId } = screen
	test('find text value of Name of Resturant', () => {
		const name = getByText("testName");
		expect(name).toBeTruthy();
		expect(queryByTestId('testofImage')?.props.source.uri).toContain("http://test.com/png");
	});

})
