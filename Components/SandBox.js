import React from 'react';

import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function SandBox({item, pressHandler}) {
  return (
    <View style={styles.container}>
      <Text style={styles.one}>1</Text>
      <Text style={styles.two}>2</Text>
      <Text style={styles.three}>3</Text>
      <Text style={styles.four}>4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  one: {
    backgroundColor: 'violet',
    padding: 10,
  },
  two: {
    backgroundColor: 'gold',
    padding: 10,
  },
  three: {
    backgroundColor: 'pink',
    padding: 10,
  },
  four: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
});
