import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

const CalendarPopup = ({ isVisible, onClose }) => {
    return (
        <Modal visible={isVisible} animationType="slide">
            <View>
                <Text>Workout Info</Text>
                {/* Dropdown and other components go here */}
                <Button title="Close" onPress={onClose} />
            </View>
        </Modal>
    );
}

export default CalendarPopup;
