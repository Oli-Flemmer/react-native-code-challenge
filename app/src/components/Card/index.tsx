import { IResturant } from 'app/src/screens/AuthenticatedIndex/AuthenticatedIndex';
import React from 'react';
import { View, Text, Image } from 'react-native';

import cardStyle from './styles';


export interface Props {
	data: IResturant
}


const Card = ({ data }: Props) => {

	const { location, cuisines, name, logo_url, ratings } = data;

	return (
		<View style={cardStyle.container}>
			<Image
				source={{ uri: logo_url }}
				style={cardStyle.image}
				accessible
				accessibilityLabel={"imageofResturant"}
				testID={"testofImage"}
			/>
			<View style={cardStyle.lblContainer}>
				<Text style={cardStyle.name}>{name}</Text>
				<Text style={cardStyle.rating}>{ratings.star_rating} ⭐</Text>
				<Text style={cardStyle.lbl}>{cuisines?.map(item => item + ' ')}</Text>
				<Text style={cardStyle.lbl} >📌{location.state + " " + location.street}</Text>
			</View>
		</View>
	)
}

export default Card;