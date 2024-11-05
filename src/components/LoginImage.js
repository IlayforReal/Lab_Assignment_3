import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const LoginImage = () => {
  return (
    <Image
      source={require('../assets/app.png')}
      style={styles.appImage}
    />
  );
};

const styles = StyleSheet.create({
  appImage: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 10,
  },
});

export default LoginImage;
