import * as React from "react";
import renderer from "react-test-renderer";
import App from "./App";

it(`renders correctly App`, () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});