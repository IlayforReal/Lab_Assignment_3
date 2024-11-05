import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const RememberMe = ({ checked, setChecked }) => {
  return (
    <View style={styles.rememberMeContainer}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
        color="#007BFF"
      />
      <Text style={styles.rememberMeText}>Remember Me?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    rememberMeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        width: "100%",
      },
      rememberMeText: {
        color: "#007BFF",
        fontSize: 14,
        marginLeft: 8,
      },
});

export default RememberMe;
