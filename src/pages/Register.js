import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RegisterLogo from '../components/RegisterLogo'; 
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RegisterLogo />
      <RegisterForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFF2EB', 
  },
});

export default Register;
