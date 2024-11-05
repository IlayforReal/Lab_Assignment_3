import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ResetSuccess = () => {
  return (
    <LinearGradient colors={['#d8eee8', '#42b1ae']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Password Reset Successful</Text>
        <Image 
          source={require('../assets/checklist.png')} 
          style={styles.checklistImage}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          Your password has been reset. You can now log in with your new password.
        </Text>


        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#373A40',
    marginBottom: 30,
    textAlign: 'center',
  },
  checklistImage: {
    width: '50%', 
    height: 50,   
    marginBottom: 10, 
  },
  loginButton: {
    backgroundColor: '#4A628A',
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ResetSuccess;
