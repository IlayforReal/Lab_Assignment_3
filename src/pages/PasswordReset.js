import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handlePasswordReset = () => {
    if (newPassword === confirmPassword && newPassword.length >= 6) {
      Alert.alert('Success', 'Your password has been reset successfully.');
      
    } else if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
    } else {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
    }
  };

  return (
    <LinearGradient
      colors={['#d8eee8', '#42b1ae']}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subText}>
          Enter your new password below.
        </Text>

        <TextInput
          label="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          mode="outlined"
          right={
            <TextInput.Icon
              name={secureTextEntry ? "eye-off" : "eye"}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
        />

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          mode="outlined"
        />

        <TouchableOpacity style={styles.resetButton} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>Reset Password</Text>
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
  resetButton: {
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
});

export default PasswordReset;
