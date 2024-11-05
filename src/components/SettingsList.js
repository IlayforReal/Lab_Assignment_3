// src/components/SettingsList.js
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsList = () => {
  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingItem}>
        <Ionicons name="moon" size={20} color="#000" />
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={false} 
          onValueChange={() => {}} 
          thumbColor="#f4f3f4"
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>
      
      <View style={styles.settingItem}>
        <Ionicons name="card" size={20} color="#000" />
        <Text style={styles.settingText}>Cards</Text>
        <Ionicons name="chevron-forward" size={20} color="#888" />
      </View>
      
      <View style={styles.settingItem}>
        <Ionicons name="person" size={20} color="#000" />
        <Text style={styles.settingText}>Profile Details</Text>
        <Ionicons name="chevron-forward" size={20} color="#888" />
      </View>
      
      <View style={styles.settingItem}>
        <Ionicons name="settings" size={20} color="#000" />
        <Text style={styles.settingText}>Settings</Text>
        <Ionicons name="chevron-forward" size={20} color="#888" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff', 
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  settingText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: '#000', // Default text color
  },
});

export default SettingsList;
