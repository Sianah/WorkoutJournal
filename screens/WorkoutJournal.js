import React, { useState, useContext } from 'react';
import { TouchableOpacity, ImageBackground, View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
          <View style={styles.underline} />
          <View style={styles.dayContainer}>
            <View style={styles.whiteBox}>
              <Text style={{ color: 'black' }}>Day:</Text>
              <TextInput
                placeholder="1"
                value={day}
                placeholderTextColor="black"
                onChangeText={setDay}
                style={styles.inputDay}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              multiline
              placeholder="Journal your workout here..."
              placeholderTextColor="gray"
              value={journalDetail}
              onChangeText={setJournalDetail}
              style={styles.journalInput}
            />
             <TouchableOpacity style={styles.buttonContainer} onPress={handleDone}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
          </View>
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
  underline: {
    height: 2,
    width: '60%',
    backgroundColor: '#FFF',
    marginTop: 1,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 30,
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
  inputDay: {
    fontSize: 18,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    width: 40,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  whiteBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
    width: '80%',
    overflow: 'hidden',
  },
  journalInput: {
    fontSize: 18,
    height: 130,
    padding: 10,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
  },
});

export default WorkoutJournal;








