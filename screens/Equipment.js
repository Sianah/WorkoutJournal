import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Equipment = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',   // center vertically
        alignItems: 'center',       // center horizontally
    },
    text: {
        fontSize: 32,              // set font size to 32
        fontWeight: 'bold',        // set font weight to bold
    },
});

export default Equipment;


