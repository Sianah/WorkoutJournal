import React, { useState, useContext } from 'react';
import { ImageBackground, View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
    <ImageBackground source={require('./smoke.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.contentCentered}>
          <Text style={styles.subtitle}>Workout Journal</Text>
          <View style={styles.dayContainer}>
            <Text style={styles.dayLabel}>Day:</Text>
            <TextInput
              placeholder="1"
              placeholderTextColor="gray"
              value={day}
              onChangeText={setDay}
              style={styles.inputDay}
            />
          </View>
          <TextInput
  multiline
  placeholder="Journal your workout here..."
  placeholderTextColor="gray" // This will make the placeholder text white
  value={journalDetail}
  onChangeText={setJournalDetail}
  style={styles.journalInput}
/>

          <Button title="Done" onPress={handleDone} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 70, 
  },
  subtitle: {
    fontSize: 32,  
    textAlign: 'center',
    marginBottom: 15,
    color: 'white', 
  },
  contentCentered: {
    alignItems: 'center',
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dayLabel: {
    fontSize: 20,  
    color: 'white',
  },
  inputDay: {
    fontSize: 18,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    width: 40,
    textAlign: 'center',
    color: 'white', // this will make the input text white
    borderRadius: 5,
},

journalInput: {
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#FFF',
  borderRadius:10,
  width: '80%',
  height: 150,
  padding: 10,
  marginBottom: 20,
  textAlignVertical: 'top',
  color: 'white', // this will make the multiline input text white
},

  backgroundImage: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent: "center"
  },
});

export default WorkoutJournal;






