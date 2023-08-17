import React from 'react';
import { View, Text } from 'react-native';

const EquipmentBox = ({ equipmentName }) => {
    return (
        <View>
            <Text>{equipmentName}</Text>
        </View>
    );
}

export default EquipmentBox;
