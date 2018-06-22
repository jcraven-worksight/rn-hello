import React, {Component} from 'react';
import { View, TextInput, TouchableHighlight, Text, GestureResponderEvent } from 'react-native';
import color from 'color';
import styles from './styles';

interface IInputWithButtonProps {
  onPress: any,
  buttonText: string,
  editable?: boolean,
  textColor?: color,
  onChangeText?: any,
  defaultValue?: string
}

export default class InputWithButton extends React.Component<IInputWithButtonProps, any> {

  constructor(props: IInputWithButtonProps) {
    super(props);
    this.state = {text: ''};
  }

  handleTextInputChange = (val: string) => {
    // this.setState({text: val});
    this.props.onPress(val);
  }

  handleButtonPress = () => {
    this.props.onPress(this.state.text);
  }

  render() {
    const self = this;
    const containerStyles = [styles.container];
    if (this.props.editable === false) {
      containerStyles.push(styles.containerDisabled);
    }
    const underlayColor: color = color(styles.$buttonBackgroundColorBase).darken(
      styles.$buttonBackgroundColorModifier
    );
    const buttonTextStyles = [styles.buttonText];
    if (this.props.textColor) {
      buttonTextStyles.push({ color: this.props.textColor });
    }
    return (
      <View style={containerStyles}>
        <TouchableHighlight
          onPress={this.handleButtonPress.bind(self)}
          style={styles.buttonContainer}
          underlayColor={underlayColor.toString()}
        >
        <Text style={buttonTextStyles}>{this.props.buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.separator} />
        <TextInput
          {...this.props}
          defaultValue={this.props.defaultValue}
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText={this.handleTextInputChange}/>
      </View>
    );

  }
}
