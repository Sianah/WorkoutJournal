import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { JournalContext } from '../JournalContext';

const WorkoutJournal = ({ navigation }) => {
  const [day, setDay] = useState("");
  const [content, setContent] = useState("");
  const { addJournalEntry } = useContext(JournalContext);

  const handleSave = () => {
    addJournalEntry(day, content);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentCentered}>
        <Text style={styles.subtitle}>Workout Journal</Text>
        <View style={styles.dayContainer}>
          <Text>Day:</Text>
          <TextInput 
            placeholder="1" 
            style={styles.inputDay} 
            onChangeText={text => setDay(text)} 
            value={day} 
          />
        </View>
        <TextInput
          multiline
          placeholder="Journal your workout here..."
          style={styles.journalInput}
          onChangeText={text => setContent(text)}
          value={content}
        />
        <Button title="Done" onPress={handleSave} />
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




