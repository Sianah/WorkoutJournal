import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
// import ClothingBox from '../components/ClothingBox';

const ClothingScreen = () => {
    return (
        <ImageBackground source={require('./smoke.jpg')} style={styles.backgroundImage}>
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
        </ImageBackground>
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
        color: 'white',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // cover or contain depending on how you want to display the image
        justifyContent: "center"
      },
});

export default ClothingScreen;

