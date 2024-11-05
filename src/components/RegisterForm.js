import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subText}>
          Already have an account? <Text style={styles.linkText}>Log in</Text>
        </Text>
  
        <View style={styles.inputRow}>
          <TextInput
            label="First name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.inputHalf}
            mode="outlined"
          />
          <TextInput
            label="Last name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.inputHalf}
            mode="outlined"
          />
        </View>
  
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
  
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isSelected ? 'checked' : 'unchecked'}
            onPress={() => setSelection(!isSelected)}
            color='#DFF2EB'
          />
          <Text style={styles.label}>
            I agree to the <Text style={styles.linkText}>Terms & Conditions</Text>
          </Text>
        </View>
  
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
  
        <View style={styles.orTextContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or register with</Text>
          <View style={styles.line} />
        </View>
  
        <View style={styles.socialContainer}>
          <View style={styles.socialButtonsRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../assets/google.png")}
                style={styles.logoImage}
              />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../assets/apple.png")}
                style={styles.logoImage}
              />
              <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/facebook.png")}
              style={styles.logoImage}
            />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    width: '90%', 
    backgroundColor: '#9AC8CD',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 30,
    marginTop: -30,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    color: '#373A40',
    fontSize: 14,
    marginBottom: 30,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 13,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputHalf: {
    width: '48%',
    marginBottom: 15,
    height: 40,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    height: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#373A40',
  },
  createAccountButton: {
    backgroundColor: '#4A628A',
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  orTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#373A40",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#373A40",
  },
  socialContainer: {
    width: "100%",
    alignItems: "center",
  },
  socialButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e2b3c",
    paddingVertical: 15,
    borderRadius: 10,
    width: "48%",
    justifyContent: "center",
    marginVertical: 5,
  },
  socialButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  logoImage: {
    width: 24,
    height: 24,
  },
});

export default RegisterForm;
