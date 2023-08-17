import React from 'react';
import { View, Text } from 'react-native';

const ClothingBox = ({ itemType }) => {
    return (
        <View>
            <Text>{itemType}</Text>
            {/* Logic for adding, viewing clothing items */}
        </View>
    );
}

export default ClothingBox;
