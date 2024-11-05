import React from "react";
import { StyleSheet, Text, View } from "react-native";


const ContactInfo = () => {
    return(
        <View style={styles.contactContainer}>
            <Text style={styles.infoText}>Email</Text>
            <Text style={styles.infoText}>Phone</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    contactContainer:{
        paddingHorizontal:  20,
        paddingVertical: 10,
        backgroundColor: '#fff',

    },

    infoText: {
        fontSize: 16,
        marginBottom: 20,
        color: '#000',

    },
});

export default ContactInfo;  