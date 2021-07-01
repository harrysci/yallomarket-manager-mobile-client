import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button, Divider} from 'react-native-elements';

const styles = StyleSheet.create({
  deleteOverlayContainer: {
    flexDirection: 'column',
  },
  deleteOverlayTitleContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteOverlayButtonContainer: {
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteOverlayTitleText: {
    // fontFamily: "AppleSDGothicNeo",
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.54,
    textAlign: 'center',
    color: '#000000',
  },
  deleteOverlayButton: {
    backgroundColor: '#ffffff',
    width: 135,
  },
  deleteOverlayButtonText: {
    // fontFamily: 'AppleSDGothicNeo',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
});

const DeleteOverlay: JSX.Element = (
  <View style={styles.deleteOverlayContainer}>
    <View style={styles.deleteOverlayTitleContainer}>
      <Text style={styles.deleteOverlayTitleText}>정말 삭제하시겠습니까?</Text>
    </View>
    <Divider orientation="horizontal" />
    <View style={styles.deleteOverlayButtonContainer}>
      <Button
        titleStyle={styles.deleteOverlayButtonText}
        buttonStyle={styles.deleteOverlayButton}
        title="아니오"
      />
      <Divider orientation="vertical" />
      <Button
        titleStyle={styles.deleteOverlayButtonText}
        buttonStyle={styles.deleteOverlayButton}
        title="네"
      />
    </View>
  </View>
);

export default DeleteOverlay;
