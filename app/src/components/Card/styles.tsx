import { StyleSheet, Dimensions } from "react-native";


const { height, width } = Dimensions.get('window');

const cardStyle = StyleSheet.create({
	image: {
		borderColor: 'grey',
		borderWidth: 0.2,
		width: "80%",
		height: "45%",
		borderRadius: 6
	},
	container: {
		height: height * 0.28,
		width: width * 0.45,
		// marginHorizontal: 10
	},
	lbl: {
		fontSize: 10,
	},
	name: {
		fontSize: 12,
		marginTop: 5
	},
	rating: {
		fontWeight: '400'
	},
	lblContainer: {
		width: "80%",
		height: "45%",
	}

});

export default cardStyle;