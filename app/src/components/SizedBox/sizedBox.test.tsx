import React from 'react';
import SizedBox, { Props } from './index';
import { render as testRender, screen } from '@testing-library/react-native';


it('renders correctly of SizedBox', () => {
	const render = (props?: Partial<Props>) =>
		testRender(<SizedBox width={40} height={40} {...props} />);
	render();
	expect(screen.toJSON).toMatchSnapshot();

});
