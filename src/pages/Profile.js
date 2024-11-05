// src/screens/Profile.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ContactInfo from '../components/ContactInfo';
import SettingsList from '../components/SettingsList';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#fff' }]}>
      <ProfileHeader />
      <ContactInfo />
      <SettingsList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
  },
});

export default Profile;