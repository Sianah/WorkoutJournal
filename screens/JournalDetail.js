import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { JournalContext } from '../JournalContext';

const JournalDetail = ({ route }) => {
    const { journals = [] } = useContext(JournalContext);  // Default to an empty array if undefined
    const journal = journals.find(j => j.id === route.params.id);

    if (!journal) {
        return (
            <View style={styles.container}>
                <Text>Error: Journal not found.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Day: {journal.day}</Text>
            <Text>Details: {journal.detail}</Text>
            {/* Display other details of the journal as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    // ... add any additional styles you might want for this screen
});

export default JournalDetail;

