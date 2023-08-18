import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import ClothingBox from '../components/ClothingBox';

const ClothingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon</Text>
            {/* 
            <Text>Clothing</Text>
            <ClothingBox itemType="shirts" />
            <ClothingBox itemType="pants" />
            <ClothingBox itemType="shoes" />
            <ClothingBox itemType="other" />
            */}
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

export default ClothingScreen;

