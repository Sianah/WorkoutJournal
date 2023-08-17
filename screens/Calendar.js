import React, { useState, useContext } from 'react';
import { View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import { JournalContext } from '../JournalContext';

const CalendarScreen = ({ navigation }) => {
    const { journals, addJournal } = useContext(JournalContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [focus, setFocus] = useState('arms');
    const [workouts, setWorkouts] = useState('');

    const handleDayPress = (day) => {
        console.log("Day pressed:", day);
        console.log("Current Focus Value:", focus);
        setSelectedDay(day.dateString);
        setModalVisible(true);
    };

    const handleSubmit = () => {
        addJournal(selectedDay, focus, workouts); 
        setModalVisible(false);
        setWorkouts(''); 
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(day) => handleDayPress(day)}
                markedDates={{
                    ...journals.reduce((acc, journal) => {
                        acc[journal.day] = { selected: true, selectedColor: 'blue' };
                        return acc;
                    }, {})
                }}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Workout Info</Text>
                        <Text>Today's Workout Focus:</Text>
                        {focus && (
                            <Picker
                                selectedValue="arms"  // Just for testing. Replace with "focus" later.
                                onValueChange={(itemValue) => setFocus(itemValue)}
                                style={{ height: 50, width: 150 }}
                            >
                                <Picker.Item label="Arms" value="arms" />
                                <Picker.Item label="Legs" value="legs" />
                                <Picker.Item label="Full Body" value="full body" />
                                <Picker.Item label="Back" value="back" />
                                {/* ... add other body parts as needed */}
                            </Picker>
                        )}
                        <Text>Workouts:</Text>
                        <TextInput
                            placeholder="Enter your workouts here..."
                            value={workouts}
                            onChangeText={setWorkouts}
                            style={styles.workoutInput}
                            multiline
                        />
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    // ... (rest of the styles remain unchanged)
});

export default CalendarScreen;






