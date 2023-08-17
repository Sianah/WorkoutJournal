import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { JournalContext } from '../JournalContext';

const Home = ({ navigation }) => {
  const { journals } = useContext(JournalContext);

  const renderJournalEntry = ({ item }) => (
    <TouchableOpacity style={styles.journalBox} onPress={() => navigation.navigate('JournalDetail', { journal: item })}>
      <Text style={styles.journalText}>Day: {item.day}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Calendar" onPress={() => navigation.navigate('Calendar')} />
        <Button title="Equipment" onPress={() => navigation.navigate('Equipment')} />
        <Button title="Clothing" onPress={() => navigation.navigate('Clothing')} />
        
      </View>
      <TouchableOpacity style={styles.plusButton} onPress={() => navigation.navigate('WorkoutJournal')}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>

      <FlatList 
        data={journals}
        renderItem={renderJournalEntry}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.journalList}
      />
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
        zIndex: 1,
    },
    plusButtonText: {
        fontSize: 32,
        color: '#FFF',  // Example color, adjust as needed
    },
    journalList: {
        alignItems: 'center',
        marginTop: 20,
      },
      journalBox: {
        width: 200,
        height: 50,
        backgroundColor: '#d3d3d3', // Example color, adjust as needed
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
      },
      journalText: {
        fontSize: 16,
      },
    });

export default Home;
