import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useJournal } from '../JournalContext';

const Home = ({ navigation }) => {
    const { journalEntries } = useJournal();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Calendar" onPress={() => navigation.navigate('Calendar')} />
        <Button title="Equipment" onPress={() => navigation.navigate('Equipment')} />
        <Button title="Clothing" onPress={() => navigation.navigate('Clothing')} />
        
      </View>
      {journalEntries.map((entry, index) => (
      <TouchableOpacity 
        key={index}
        style={styles.entryBox}
        onPress={() => navigation.navigate('JournalDetail', { entry })}
      >
        <Text>Day: {entry.day}</Text>
      </TouchableOpacity>
    ))}
      <TouchableOpacity style={styles.plusButton} onPress={() => navigation.navigate('WorkoutJournal')}>
                <Text style={styles.plusButtonText}>+</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 15,  // Top padding can be adjusted to move the content down a bit if required
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 10,  // Reduced marginBottom
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    plusButton: {
        position: 'absolute',  // Make the position absolute
        bottom: 20,            // Position it 20 units from the bottom
        right: 20,             // Position it 20 units from the right
        width: 60,             // Set the width
        height: 60,            // Set the height
        borderRadius: 30,      // Half of width/height to make it circular
        backgroundColor: '#000',  // Example color, adjust as needed
        alignItems: 'center',   // Center the text horizontally
        justifyContent: 'center', // Center the text vertically
    },
    plusButtonText: {
        fontSize: 32,
        color: '#FFF',  // Example color, adjust as needed
    },
});

export default Home;
