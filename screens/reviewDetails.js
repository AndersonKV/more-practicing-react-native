import React from 'react';

import {
  StyleSheet, View, Text, Button, Image,
} from 'react-native';

import { globalStyles, images } from '../styles/global';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
});

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <View style={styles.rating}>
        <Text>GameZone rating: </Text>
        <Image source={images.ratings[rating]} />
        {/* <Image source={require(`../assets/rating-${navigation.getParam('rating')}.png`)} /> */}
      </View>
    </View>
  );
}
