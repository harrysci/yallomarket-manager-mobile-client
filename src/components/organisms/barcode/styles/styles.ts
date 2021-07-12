import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scannerStyle: {
    width: '100%',
    height: 520,
  },
  capture: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InfoText: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  font: {
    height: 23,
    fontFamily: '',
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.17,
    textAlign: 'left',
    alignSelf: 'center',
    color: '#000000',
    backgroundColor: '#fade7f',
  },
  fontRight: {
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.17,
    textAlign: 'right',
    alignSelf: 'center',
    color: '#000000',
  },
});
