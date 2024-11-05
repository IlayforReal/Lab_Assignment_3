import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProfileHeader = () => {
  return (
    <View>
      <View style={styles.profileBox}>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/image.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Shiela Theresa Mosqueda</Text>
        <Text style={styles.status}>Software Engineer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileBox: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start', 
    textAlign: 'left', 
    marginLeft: 10, 
  },
  
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#BCF2F6',
  },
  profileImage: {
    width: width * 0.25, 
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2, 
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  status: {
    fontSize: 14,
    color: '#FFC107', 
  },
});

export default ProfileHeader;
