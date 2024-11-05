import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    if (email) {
      Alert.alert('Recovery Instructions Sent', `Instructions to recover your password have been sent to ${email}.`);
    } else {
      Alert.alert('Error', 'Please enter a valid email address.');
    }
  };

  return (
    <LinearGradient
      colors={['#d8eee8', '#42b1ae']}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Password Recovery</Text>
        <Text style={styles.subText}>
          Enter your email address to receive password recovery instructions.
        </Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
        />

        <TouchableOpacity style={styles.recoveryButton} onPress={handleRecovery}>
          <Text style={styles.buttonText}>Send Recovery Instructions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.linkText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subText: {
    color: '#373A40',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  recoveryButton: {
    backgroundColor: '#4A628A',
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  backButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 14,
  },
});

export default PasswordRecovery;
