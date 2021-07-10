import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {display: 'flex', flexDirection: 'column', flex: 1},
  yellowText: {
    marginTop: '4.9%',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.13,
    color: '#e6a800',
    paddingBottom: 4,
  },
  header: {
    width: 156,
    height: 23,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 19,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 23,
    letterSpacing: -0.61,
    textAlign: 'left',
    color: '#000000',
  },
  imageStyle: {
    width: '100%',
    height: 288,
    zIndex: 0,
  },
  backgroundShadowImage: {
    width: 375,
    height: 288,
    opacity: 0.2,
    position: 'absolute',
    backgroundColor: '#000000',
  },
  focusImage: {
    position: 'absolute',
    width: 239.3,
    height: 239.5,
    zIndex: 100,
  },
  ParentImage: {
    position: 'absolute',
  },
  flexbox1: {
    paddingBottom: 113,
    marginLeft: '6.9%',
  },
  flexbox2: {
    justifyContent: 'center',
    paddingTop: 113,
    marginLeft: '24.6%',
  },
  guidefont1: {
    width: 28,
    height: 16,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0.13,
    textAlign: 'center',
    color: '#e6a800',
    marginRight: '4%',
  },
  guidefont2: {
    width: 136,
    height: 25,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.21,
    textAlign: 'center',
    color: '#000000',
  },
  flexRow: {
    marginLeft: '6.4%',
    marginTop: 32,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  flexRow2: {
    marginLeft: '6.4%',
    marginTop: '1%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  flexBox: {
    marginTop: 81,
    alignItems: 'center',
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
  font2: {
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
  buttonStyle: {
    width: 328,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fbd145',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
  },
  buttonTitleFont: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
  },
});
