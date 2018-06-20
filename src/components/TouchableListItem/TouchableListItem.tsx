import React from 'react';
import { Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

const TouchableListItem = ({ displayText, onTouch  }: { displayText: string, onTouch: any }) => (
  <TouchableHighlight onPress={onTouch} >
    <View style={styles.container}>
      <Text style={styles.text} >{displayText}</Text>
    </View>
  </TouchableHighlight>
);

export default TouchableListItem;
