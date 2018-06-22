import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';
import {testAirportFetch} from '../gql/testQueries';

// const getStuff = async () => {
//   const r = await testAirportFetch();
//   console.log(r);
// };

const stuff = () => {
  // getStuff();
  return (<View style={styles.container}>
    <View style={styles.viewStyleOne}>
      <Text style={styles.textStyle}> 1 </Text>
    </View>
    <View style={styles.viewStyleTwo}>
      <Text style={styles.textStyle}> 2 </Text>
    </View>
    <View style={styles.viewStyleThree}>
      <Text style={styles.textStyle}> 3 </Text>
    </View>
  </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#4226f4',
    flex: 1,
    // determines the primary axis
    flexDirection: 'row', // flex defaults to column. row would display these divs as 1 2 3

    // determines distribution of children along primary axis
    // justifyContent: 'flex-end', // if direction set to row, move right of parent container
    // justifyContent: 'flex-start', // if direction set to row, move left of parent container
    justifyContent: 'center',

    // determines alignment of children along secondary axis
    alignItems: 'flex-end' // if direction set to row, move to bottom right of parent container
  },
  viewStyleOne: {
    width: 40,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b642f4',
    // alignSelf: 'flex-start', // override parents flex config
    // flexGrow: 1 // how much it should grow compared to other items
    flexBasis: 50 // or can set item size based on percent
  },
  viewStyleTwo: {
    width: 40,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32cd94',
    flexBasis: 20
  },
  viewStyleThree: {
    width: 40,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4500',
    flexBasis: 30
  },
  textStyle: {
    textAlign: 'center'
  }
});
export default stuff;