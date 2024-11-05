import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import LoginImage from '../components/LoginImage';
import LoginForm from '../components/LoginForm';
import RememberMe from '../components/RememberMe';
import SocialLogin from '../components/SocialLogin';


const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const handleLogin = () => {
    Alert.alert('Login Attempt', `Email: ${email}, Password: ${password}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LoginImage />
      <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <RememberMe checked={checked} setChecked={setChecked} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <SocialLogin />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: '#B9E5E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#4A628A',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default Login;
