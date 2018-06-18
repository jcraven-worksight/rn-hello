import React from 'react';
import { Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const NiceButton = ({color, title, onTouch}: {color?: string, title?: string, onTouch: any}) => (
    <Button
      onPress={onTouch}
      title={title || 'Submit'}
      color={color || EStyleSheet.value('$primaryGreen')}
    />
);

export default NiceButton;