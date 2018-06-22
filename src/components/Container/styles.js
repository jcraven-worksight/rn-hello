import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$darkText',
    alignItems: 'center',
    // justifyContent: 'center' // in RN -
  },
  text: {
    color: '$white',
    fontSize: 15
  },
  textError: {
    color: '$primaryOrange',
    fontSize: 18,
    fontWeight: '300'
  },
  itemSeparator: {
    backgroundColor: '$darkText',
    height: 5
  }
});