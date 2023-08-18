import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarScreen = ({ navigation }) => {
    const [selectedDates, setSelectedDates] = useState({});

    useEffect(() => {
        // Load saved dates when component mounts
        const loadDates = async () => {
            try {
                const storedDates = await AsyncStorage.getItem('selectedDates');
                if (storedDates) {
                    setSelectedDates(JSON.parse(storedDates));
                }
            } catch (error) {
                console.error('Failed to load saved dates:', error);
            }
        };

        loadDates();
    }, []);

    const toggleDateSelection = async (day) => {
        const date = day.dateString;
        let newDates = { ...selectedDates };

        if (selectedDates[date]) {
            delete newDates[date];  // If date is already selected, unselect it
        } else {
            newDates[date] = { selected: true, selectedColor: 'blue' };  // Otherwise, select the date
        }

        // Save to AsyncStorage
        try {
            await AsyncStorage.setItem('selectedDates', JSON.stringify(newDates));
            setSelectedDates(newDates);
        } catch (error) {
            console.error('Failed to save dates:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(day) => toggleDateSelection(day)}
                markedDates={selectedDates}
            />
            <Text style={styles.instructionText}>
                Please select the days that you wish to work out.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    instructionText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        padding: 10,                 // Add some padding around the text
        borderWidth: 1,              // Add a border
        borderColor: '#ccc',        // Set border color
        borderRadius: 5,            // Rounded corners
        marginHorizontal: 20,       // Add margin to the sides
    }
});

export default CalendarScreen;









