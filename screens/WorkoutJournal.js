import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useJournal } from '../JournalContext';



const WorkoutJournal = ({ navigation }) => {
  const { setJournalEntries } = useJournal();
  const [day, setDay] = useState("");
  const [journalText, setJournalText] = useState("");

  const handleDone = () => {
    setJournalEntries(prevEntries => [...prevEntries, { day, journalText }]);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Workout Journal</Text>
      <View style={styles.contentCentered}>
        <View style={styles.dayContainer}>
          <Text>Day:</Text>
          <TextInput value={day}
    onChangeText={setDay} placeholder="1" style={styles.inputDay} />
        </View>
        <TextInput
        value={journalText}
        onChangeText={setJournalText}
          multiline
          placeholder="Journal your workout here..."
          style={styles.journalInput}
        />
        <Button title="Done" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingTop: 70,  // Adjust this padding to move content down to your liking
    },
    subtitle: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 15,
    },
    contentCentered: {
      alignItems: 'center',
    },
    dayContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    inputDay: {
      marginLeft: 10,
      borderWidth: 1,
      borderColor: '#000',
      width: 40,
      textAlign: 'center',
    },
    journalInput: {
      borderWidth: 1,
      borderColor: '#000',
      width: '80%',
      height: 150,
      padding: 10,
      marginBottom: 20,
      textAlignVertical: 'top',
    },
  });
  

export default WorkoutJournal;




