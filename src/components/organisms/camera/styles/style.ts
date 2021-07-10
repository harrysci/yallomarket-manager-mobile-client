import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  cameraStyle: {
    width: '100%',
    height: 300,
    marginTop: 170,
  },
  buttonStyle: {
    alignItems: 'center',
    width: 62,
    height: 62,
    borderRadius: 50,
    borderStyle: 'dotted',
    borderWidth: 5,
    borderColor: '#fbd145',
    backgroundColor: '#fbd145',
  },
  flexRow: {
    marginLeft: '6.4%',
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  font1: {
    height: 23,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.17,
    textAlign: 'left',
    alignSelf: 'center',
    color: '#000000',
  },
  font4: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.17,
    textAlign: 'left',
    alignSelf: 'center',
    color: '#000000',
  },
  font3: {
    height: 23,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.17,
    textAlign: 'left',
    alignSelf: 'center',
    color: '#000000',
    backgroundColor: '#fade7f',
  },
  buttonFlex: {
    alignItems: 'center',
    marginTop: '13.2%',
  },
});
