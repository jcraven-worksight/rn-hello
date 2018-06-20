import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '$primaryBlue',
    borderStyle: 'solid',
    borderRadius: 3
  },
  text: {
    color: '$white',
    fontSize: 15
  },
});