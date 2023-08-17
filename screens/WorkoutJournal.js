import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { JournalContext } from '../JournalContext';

const WorkoutJournal = ({ navigation }) => {
  const { addJournal } = useContext(JournalContext);

  const [day, setDay] = useState('');
  const [journalDetail, setJournalDetail] = useState('');

  const handleDone = () => {
    addJournal(day, journalDetail);
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
            value={day}
            onChangeText={setDay}
            style={styles.inputDay}
          />
        </View>
        <TextInput
          multiline
          placeholder="Journal your workout here..."
          value={journalDetail}
          onChangeText={setJournalDetail}
          style={styles.journalInput}
        />
        <Button title="Done" onPress={handleDone} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 70, // Adjust to match your desired appearance
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





