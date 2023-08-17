import React from 'react';
import { View, Text } from 'react-native';
import ClothingBox from '../components/ClothingBox';

const ClothingScreen = () => {
    return (
        <View>
            <Text>MyGrind</Text>
            <Text>Clothing</Text>
            <ClothingBox itemType="shirts" />
            <ClothingBox itemType="pants" />
            <ClothingBox itemType="shoes" />
            <ClothingBox itemType="other" />
        </View>
    );
}

export default ClothingScreen;
