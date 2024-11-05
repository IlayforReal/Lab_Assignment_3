import React from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const RegisterLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/app.png')} 
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 10,
  },
});

export default RegisterLogo;
