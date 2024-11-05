import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const LoginForm = ({ email, setEmail, password, setPassword }) => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 15,
  },
});

export default LoginForm;
