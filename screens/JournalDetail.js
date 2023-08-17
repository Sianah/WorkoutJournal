import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { JournalContext } from '../JournalContext';

const JournalDetail = ({ route }) => {
  const { entryId } = route.params;
  const { journalEntries } = useContext(JournalContext);

  const entry = journalEntries.find(e => e.id === entryId);

  return (
    <View style={styles.container}>
      <Text>Day: {entry.day}</Text>
      <Text>Details: {entry.details}</Text>
    </View>
  );
};

export default JournalDetail;
