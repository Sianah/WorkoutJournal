import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { JournalContext } from '../JournalContext';

const CalendarScreen = ({ navigation }) => {
    const { journals } = useContext(JournalContext);

    const onDayPress = (day) => {
        const journalForDay = journals.find(j => j.day === day.dateString);
        if (journalForDay) {
            navigation.navigate('JournalDetail', { journal: journalForDay });
        }
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(day) => onDayPress(day)}
                markedDates={{
                    ...journals.reduce((acc, journal) => {
                        acc[journal.day] = { selected: true };
                        return acc;
                    }, {})
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default CalendarScreen;


