import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const SocialLogin = () => {
  return (
    <View style={styles.socialContainer}>
        <View style={styles.orTextContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>
            <Text style={styles.boldText}>LOGIN</Text> with
          </Text>
          <View style={styles.line} />
        </View>
      <View style={styles.socialButtonsRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.logoImage} />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/apple.png')} style={styles.logoImage} />
          <Text style={styles.socialButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/facebook.png')} style={styles.logoImage} />
        <Text style={styles.socialButtonText}>Facebook</Text>
      </TouchableOpacity>
      <Text style={styles.label}>
          Need an Account? <Text style={styles.linkText}>Sign Up</Text>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    orTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        width: "100%",
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: "#b3b3b3",
      },
      orText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: "#000",
      },
      boldText: {
        fontWeight: "bold",
      },
  socialContainer: {
    width: '100%',
    alignItems: 'center',
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e2b3c',
    paddingVertical: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    marginVertical: 5,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  logoImage: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 15,
    color: '#373A40',
    marginVertical: 10,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default SocialLogin;
