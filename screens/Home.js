import React, { useContext } from 'react';
import { ImageBackground, View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { JournalContext } from '../JournalContext';

const Home = ({ navigation }) => {
  const { journals, setJournals, updateJournals } = useContext(JournalContext);

const handleDelete = (id) => {
    const updatedJournals = journals.filter(journal => journal.id !== id);
    setJournals(updatedJournals);
    updateJournals(updatedJournals); // Persist the updated journals in AsyncStorage
};


const renderJournalEntry = ({ item }) => (
  <TouchableOpacity 
      style={styles.journalBox} 
      onPress={() => navigation.navigate('JournalDetail', { id: item.id })}>
      <View style={styles.journalEntryContainer}>
          <Text style={styles.journalText}>Day: {item.day}</Text>
          <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
      </View>
  </TouchableOpacity>
);


  return (
    <ImageBackground source={require('./smoke.jpg')} style={styles.backgroundImage}>
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
    </ImageBackground>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#d3d3d3',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        width: '90%',
        elevation: 5,  // for Android
    },
    journalText: {
      fontSize: 18,
      fontWeight: '600',
  },
      backgroundImage: {
        flex: 1,
        resizeMode: "cover", // cover or contain depending on how you want to display the image
        justifyContent: "center"
      },
      journalEntryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
      
    deleteButton: {
      backgroundColor: 'transparent', // making it transparent
  },
      
  deleteButtonText: {
    color: 'red', // Just the color, without the background
    fontSize: 18,
    fontWeight: '600',
},
      
    });

export default Home;
