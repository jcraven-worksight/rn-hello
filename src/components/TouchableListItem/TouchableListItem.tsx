import React from 'react';
import { Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

interface Tprops {
  onTouch: Function;
  displayText: string;
  idx: number;
}

class TouchableListItem extends React.Component<Tprops, any> {
  constructor(props: Tprops) {
    super(props);
  }

  // property initializer way of doing methods
  // dont need to bind in event handler below (ex onPress)
  handleTouch = () => {
    this.props.onTouch(this.props.idx);
  }

  // es6 / old way - using this method, need to bind to this method in event handlers
  // handleTouch() {
  //   this.props.onTouch(this.props.idx);
  // }

  render() {
    return (
      <TouchableHighlight onPress={this.handleTouch} >
        <View style={styles.container}>
          <Text style={styles.text} >{this.props.displayText}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default TouchableListItem;
