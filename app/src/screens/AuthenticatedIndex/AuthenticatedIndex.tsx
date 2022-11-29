import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ListRenderItem, StyleSheet, TextInput } from 'react-native';

import Card from 'app/src/components/Card';
import LoadingSpinner from 'app/src/components/LoadingSpinner';
import { width } from 'app/constants';


interface ILocation {
  street: string,
  state: string,
}

interface IRatings {
  star_rating: number
}

export interface IResturant {
  id: number;
  name: string,
  logo_url: string,
  cuisines: String[],
  location: ILocation,
  ratings: IRatings
}

const AuthenticatedIndex = () => {

  const [data, setData] = useState<[]>([]);
  const [query, setQuery] = useState<string>('55 Water St, 10041');
  const [searchText, setSearchText] = useState<string>('55 Water St, 10041');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        setLoading(true);
        const lowered: string = query.toLowerCase();
        const addUnderScore: string = lowered.split(' ').join('_');
        const final: string = addUnderScore.replace(',', '');
        let result = await fetch(`https://dcom-native-interview.s3.amazonaws.com/api/merchant/query/${final}`);
        const data = await result.json();
        if (result.ok) {
          const merchants = data?.merchants;
          setData(merchants);
        }
        else {
          console.log('something went wrong', data, 'cool one');
        }
        setLoading(false);
      }
      catch (err) {
        setLoading(false);
        console.log('something went wrong', data, 'cool one');
      }

    })();
  }, [query]);


  const Item = ({ data }: { data: IResturant }) => {
    return (
      <Card data={data} />
    )
  }

  const renderItem: ListRenderItem<IResturant> = ({ item }) => <Item data={item} />;

  return (<View style={styles.container}>
    <TextInput value={searchText} onChangeText={setSearchText} onSubmitEditing={({ nativeEvent }) => setQuery(nativeEvent.text)} placeholder='55 Water St, 10041' style={styles.searchBar} />
    {loading && <LoadingSpinner size='large' color='black' />}
    {data.length === 0 ? <Text> Please type address in Search Bar to get Resturants </Text> : <View style={styles.flatListContainer}>
      <Text style={styles.title}>Resturants within location {query}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>}
  </View>
  );
};



const styles = StyleSheet.create({
  flatListContainer: {
    marginHorizontal: width * 0.05,
    marginBottom: 30
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 10
  },
  searchBar: {
    color: 'black',
    borderWidth: 0.5,
    borderColor: 'grey',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "90%",
    padding: 15
  },
  container: {
    marginTop: 20,
  }
})

export default AuthenticatedIndex;
